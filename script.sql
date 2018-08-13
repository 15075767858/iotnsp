DROP TABLE IF EXISTS `products`;
create table products
(
  id          int                                 null,
  name        varchar(100)                        null,
  identifier  varchar(10)                         null,
  create_time timestamp default CURRENT_TIMESTAMP not null
  on update CURRENT_TIMESTAMP,
  user_id     varchar(10)                         null
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

