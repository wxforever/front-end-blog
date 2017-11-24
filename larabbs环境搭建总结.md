#larabbs环境搭建总结

环境：

1、window 10下安装的virtual box 然后配置centos7环境

2、宝塔面板安装的lnmp环境：mysql5.7 php7.1 nginx1.8

3、git克隆larabbs

4、安装composer然后composer install

5、cp .env.example .env并修改.env数据库配置 mailtrap配置等

6、php artisan key:generate

8、php artisan migrate --seed

9、安装nodejs（我是通过yum安装），安装cnpm

10、cnpm install然后cnpm run dev然后cnpm run production

11、修改public vendor storage目录权限为777

12、注释掉导致报错的app.blade.pp中sudo相关行

13、修改nginx.conf为laravel相关配置
