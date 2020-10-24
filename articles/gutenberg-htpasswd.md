---
title: 'Fix broken styles when using .htpasswd with WordPress Gutenberg'
date: '2020-10-24 10:00'
---

Gutenberg is awesome. Once setup, it allows any non-technical person to add new pages to their website and to do so in a visual drag-and-drop fashion.

As much as I enjoy working with Gutenberg, I sometimes run into strange issues like the one I'm going to talk about below.

## Password protecting a Gutenberg site without breaking the admin styles

You just finished developing your client's site locally, you're now ready to deploy it to pre-production. Given that their site is not ready for prime time yet, you strap your usual `.htaccess` on top of it to password protect the entire website.

```ApacheConf
AuthUserFile /var/www/www.my-client-site.com/.htpasswd
AuthType Basic
AuthName "Restricted Area"
Require valid-user

# BEGIN WordPress
# Les directives (lignes) entre « BEGIN WordPress » et « END WordPress » sont générées
# dynamiquement, et doivent être modifiées uniquement via les filtres WordPress.
# Toute modification des directives situées entre ces marqueurs sera surchargée.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

_Problem_, password protection works fine on the frontend but every page in the administrator area seems to ignore styles completely.

## Solution

Gutenberg is asynchronous by design. One thing I love about it is that while editing a page locally, I can still make changes to any block template and they'll show up instantly. While this feature is a must-have for any page-builder worth its salt, it also means that **the website has to make http requests to himself for external ressources like stylesheets and script files**.

As we've enabled password protection and WordPress doesn't natively handle this case yet, we have to use a little htaccess trickery to re-enable styles :

```ApacheConf{1,6}
SetEnvIf Referer www.my-client-site.com noauth=1
AuthUserFile /var/www/www.my-client-site.com/.htpasswd
AuthType Basic
AuthName "Restricted Area"
Require valid-user
Require env noauth

# BEGIN WordPress
# Les directives (lignes) entre « BEGIN WordPress » et « END WordPress » sont générées
# dynamiquement, et doivent être modifiées uniquement via les filtres WordPress.
# Toute modification des directives situées entre ces marqueurs sera surchargée.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

In essence, these two lines means :

- If the request comes from _www.my-client-site.com_, then set the env variable _noauth_ to be true.<br>
- If the request comes from an authenticated user or the env variable _noauth_ is true, authorize the request.

And with that, our meticulously crafted styles are back and visible on the frontend as well as in the admin area of the client's website.
