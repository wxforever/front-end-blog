### 解决laravel_migration错乱问题

laravel项目migration错乱，导致无法运行migrate命令。不顾数据的话可以删除全部数据库，然后重新migrate.但是要保存数据，操作如下

1、备份数据库
2、新建个临时数据库，修改laravel env配置指向临时数据库
3、运行migrate命令，然后把临时数据库中的migrations表复制到旧数据库中，相当于新建migrations表
