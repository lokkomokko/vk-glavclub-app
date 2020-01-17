
user www-data;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    # passenger_root /usr/local/rvm/gems/ruby-2.4.1/gems/passenger-5.3.7;
    passenger_root /usr/local/rvm/gems/ruby-2.6.1/gems/passenger-5.3.7;
    passenger_ruby /usr/local/rvm/rubies/ruby-2.6.1/bin/ruby;
    # passenger_ruby /usr/local/rvm/gems/ruby-2.4.1/wrappers/ruby;
    passenger_instance_registry_dir /tmp;

    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    gzip on;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript;
    gzip_http_version 1.1;
    gzip_vary on;
    gzip_comp_level 1;
    gzip_proxied any;


    passenger_enabled on;

    server {
    if ($host = www.spika.org) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = spika.org) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


      listen 80;
      listen [::]:80;
      server_name spika.org www.spika.org;

      return 301 https://$host$request_uri;


    



}

    server {
        listen 443 ssl;
        server_name spika.org www.spika.org;
      root /var/www/spika.org;
      index       index.php;	
	    access_log  /var/www/logs/spika.org/access.log;
	    error_log   /var/www/logs/spika.org/error.log;

		location /
		{
			index  index.php index.html index.htm;
			try_files $uri $uri/ /index.php?$args; 
		}
		
		location ~ \.php$ {
			try_files $uri = 404;
			include fastcgi_params;
			fastcgi_pass  unix:/run/php/php7.0-fpm.sock;
			fastcgi_index index.php;

			fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
		}
		
        location ~* ^.+\.(jpg|jpeg|gif|png|svg|js|css|mp3|ogg|mpe?g|avi|zip|gz|bz2?|rar)$ {
                error_page 404 = @fallback;
        }
        location @fallback {
                try_files $uri =404;
                fastcgi_split_path_info ^(.+\.php)(/.+)$;
                include         fastcgi_params;
                fastcgi_index   index.php;
                fastcgi_param   SCRIPT_FILENAME $document_root$fastcgi_script_name;
                fastcgi_param   SERVER_NAME $host;
                fastcgi_pass  unix:/run/php/php7.0-fpm.sock;
        }
        ssl on;
    ssl_certificate /etc/letsencrypt/live/spika.org/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/spika.org/privkey.pem; # managed by Certbot
        ssl_prefer_server_ciphers on;

        #charset koi8-r;


    

}

    server {
      listen 80;
      listen [::]:80;
      server_name 78634.s.time4vps.cloud;

        #access_log  logs/host.access.log  main;
	passenger_enabled on;
	root /home/railsuser/app/current/public;
	rails_env production;

	client_max_body_size 32m;


        location ~ ^/(assets|packs)/  {
            expires max;
            add_header Cache-Control public;
            add_header ETag "";
            gzip_static on;
        }

     
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
      
    }





  

}
