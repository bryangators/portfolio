#!/bin/sh

# if certs don't exist, obtain them
if [ ! -d "/etc/letsencrypt/live" ]; then
  certbot certonly --reinstall --webroot --webroot-path=/var/www/certbot --email ${CERTBOT_EMAIL} --agree-tos --no-eff-email -d ${CERTBOT_DOMAIN}
fi

# renew certs
certbot renew --webroot --webroot-path=/var/www/certbot