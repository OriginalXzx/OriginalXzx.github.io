(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{453:function(e,t,a){"use strict";a.r(t);var n=a(1),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[e._v("本人从业以来第一次碰到数据库死锁问题，当然是深究到底,不可忽略了。")])]),e._v(" "),a("h2",{attrs:{id:"死锁悄然而至"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#死锁悄然而至"}},[e._v("#")]),e._v(" 死锁悄然而至")]),e._v(" "),a("p",[e._v("一天下午发现服务报错，报错信息如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("com.mysql.jdbc.exceptions.jdbc4.MySQLTransactionRollbackException: Deadlock found when trying to get lock; try restarting transaction\nat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\nat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\nat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\nat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\nat com.mysql.jdbc.Util.handleNewInstance(Util.java:404)\nat com.mysql.jdbc.Util.getInstance(Util.java:387)\nat com.mysql.jdbc.SQLError.createSQLException(SQLError.java:950)\nat com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:3966)\nat com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:3902)\nat com.mysql.jdbc.MysqlIO.sendCommand(MysqlIO.java:2526)\nat com.mysql.jdbc.MysqlIO.sqlQueryDirect(MysqlIO.java:2673)\nat com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2549)\nat com.mysql.jdbc.PreparedStatement.executeInternal(PreparedStatement.java:1861)\nat com.mysql.jdbc.PreparedStatement.executeUpdateInternal(PreparedStatement.java:2073)\nat com.mysql.jdbc.PreparedStatement.executeUpdateInternal(PreparedStatement.java:2009)\nat com.mysql.jdbc.PreparedStatement.executeLargeUpdate(PreparedStatement.java:5098)\nat com.mysql.jdbc.PreparedStatement.executeUpdate(PreparedStatement.java:1994)\nat com.alibaba.druid.pool.DruidPooledPreparedStatement.executeUpdate(DruidPooledPreparedStatement.java:253)\nat com.dianping.zebra.single.jdbc.SinglePreparedStatement$2.doAction(SinglePreparedStatement.java:92)\nat com.dianping.zebra.single.jdbc.SinglePreparedStatement$2.doAction(SinglePreparedStatement.java:80)\nat com.dianping.zebra.single.jdbc.SingleStatement.executeWithFilterOrigin(SingleStatement.java:228)\nat com.dianping.zebra.single.jdbc.SingleStatement.access$000(SingleStatement.java:37)\nat com.dianping.zebra.single.jdbc.SingleStatement$8.executeSingleStatement(SingleStatement.java:215)\nat com.dianping.zebra.filter.DefaultJdbcFilter.executeSingleStatement(DefaultJdbcFilter.java:60)\nat com.dianping.zebra.single.jdbc.SingleStatement$8.executeSingleStatement(SingleStatement.java:212)\nat com.dianping.zebra.filter.DefaultJdbcFilter.executeSingleStatement(DefaultJdbcFilter.java:60)\nat com.dianping.zebra.single.jdbc.SingleStatement$8.executeSingleStatement(SingleStatement.java:212)\nat com.dianping.zebra.filter.audit.AuditFilter.executeSingleStatement(AuditFilter.java:67)\nat com.dianping.zebra.single.jdbc.SingleStatement$8.executeSingleStatement(SingleStatement.java:212)\nat com.dianping.zebra.filter.DefaultJdbcFilter.executeSingleStatement(DefaultJdbcFilter.java:60)\nat com.dianping.zebra.single.jdbc.SingleStatement$8.executeSingleStatement(SingleStatement.java:212)\nat com.dianping.zebra.filter.DefaultJdbcFilter.executeSingleStatement(DefaultJdbcFilter.java:60)\nat com.dianping.zebra.single.jdbc.SingleStatement$8.executeSingleStatement(SingleStatement.java:212)\nat com.dianping.zebra.monitor.filter.CatFilter.executeSingleStatement(CatFilter.java:261)\nat com.dianping.zebra.single.jdbc.SingleStatement$8.executeSingleStatement(SingleStatement.java:212)\nat com.dianping.zebra.single.jdbc.SingleStatement.executeWithFilter(SingleStatement.java:220)\nat com.dianping.zebra.single.jdbc.SinglePreparedStatement.executeUpdate(SinglePreparedStatement.java:80)\nat com.dianping.zebra.group.jdbc.GroupPreparedStatement.executeUpdateOnConnection(GroupPreparedStatement.java:177)\nat com.dianping.zebra.group.jdbc.GroupPreparedStatement.executeUpdate(GroupPreparedStatement.java:161)\nat com.dianping.zebra.group.jdbc.GroupPreparedStatement.execute(GroupPreparedStatement.java:100)\n")])])]),a("p",[e._v("当时一点惊讶，有有一点兴奋，毕竟是第一次碰到这种事，多新鲜啊，能不兴奋吗？😂"),a("br"),e._v("\n从报错信息可以看出，大概是某一个事务一直拿不到锁（发现死锁），就回滚了，也就是这个操作算是无效了。"),a("br"),e._v("\n这个时候我们再去看看死锁相关事务的日志")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("------------------------\nLATEST DETECTED DEADLOCK\n------------------------\n2019-08-01 12:04:43 0x7fc55ee5c700\n*** (1) TRANSACTION:\nTRANSACTION 4795708646, ACTIVE 0 sec fetching rows\nmysql tables in use 1, locked 1\nLOCK WAIT 12 lock struct(s), heap size 1136, 27 row lock(s)\nMySQL thread id 47505621, OS thread handle 140469423318784, query id 25961909428 10.64.129.102 activity updating\n/*id:f2de8e66*/update Bwc_Win_Candidate\n     SET state = 2 \n     WHERE (  activity_id = '1310731492'\n                  and user_id = 85***208\n                  and extra_id = '1310731492'\n                  and extra_type = 1 )\n*** (1) WAITING FOR THIS LOCK TO BE GRANTED:\nRECORD LOCKS space id 316 page no 316 n bits 256 index PRIMARY of table `DPCityActivity`.`Bwc_Win_Candidate` trx id 4795708646 lock_mode X locks rec but not gap waiting\n*** (2) TRANSACTION:\nTRANSACTION 4795708632, ACTIVE 0 sec fetching rows\nmysql tables in use 1, locked 1\n160 lock struct(s), heap size 24784, 29593 row lock(s)\nMySQL thread id 47507030, OS thread handle 140485677401856, query id 25961909390 10.81.65.15 activity updating\n/*id:f2de8e66*/update Bwc_Win_Candidate\n     SET state = 2 \n     WHERE (  activity_id = '1034085677'\n                  and user_id = 15***741\n                  and extra_id = '1034085677'\n                  and extra_type = 1 )\n*** (2) HOLDS THE LOCK(S):\nRECORD LOCKS space id 316 page no 316 n bits 256 index PRIMARY of table `DPCityActivity`.`Bwc_Win_Candidate` trx id 4795708632 lock_mode X\n*** (2) WAITING FOR THIS LOCK TO BE GRANTED:\nRECORD LOCKS space id 316 page no 317 n bits 256 index PRIMARY of table `DPCityActivity`.`Bwc_Win_Candidate` trx id 4795708632 lock_mode X waiting\n*** WE ROLL BACK TRANSACTION (1)\n")])])]),a("p",[e._v("说是看日志，前提是看得懂日志呀，我先来一步一步搞懂日志的含义吧")]),e._v(" "),a("h2",{attrs:{id:"死锁日志分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#死锁日志分析"}},[e._v("#")]),e._v(" 死锁日志分析")]),e._v(" "),a("p",[e._v("(1) TRANSACTION: "),a("em",[e._v("事务1")]),a("br"),e._v(" "),a("strong",[e._v("TRANSACTION 4795708646, ACTIVE 0 sec fetching rows")]),a("br"),e._v("\n事务编号4795708646，活跃0秒，fetching rows表示事务状态："),a("br")]),e._v(" "),a("ul",[a("li",[e._v("fetching rows 表示事务状态在row_search_for_mysql中被设置，表示正在查找记录。")]),e._v(" "),a("li",[e._v("updating or deleting 表示事务已经真正进入了Update/delete的函数逻辑（row_update_for_mysql）")]),e._v(" "),a("li",[e._v("thread declared inside InnoDB 说明事务已经进入innodb层。通常而言 不在innodb层的事务大部分是会被回滚的。")]),e._v(" "),a("li",[e._v("starting index read 表示根据索引读取数据。")])]),e._v(" "),a("p",[e._v("就是说事务1在查找记录这个状态活跃时间是0s。"),a("br"),e._v(" "),a("strong",[e._v("mysql tables in use 1, locked 1")]),a("br"),e._v("\n说明当前的事务使用一个表。locked 1 表示表上有一个表锁,对于DML语句为"),a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-locking.html"}},[e._v("LOCK_IX")]),e._v(" "),a("br")]),e._v(" "),a("p",[a("strong",[e._v("LOCK WAIT 12 lock struct(s), heap size 1136, 27 row lock(s)")]),e._v(" "),a("br"),e._v("\nLOCK WAIT表示正在等待锁, 2 lock struct(s) 表示trx->trx_locks锁链表的长度为12，每个链表节点代表该事务持有的一个锁结构，包括表锁，记录锁以及auto_inc锁等。本案例中12locks 表示IX锁和lock_mode X("),a("a",{attrs:{href:"https://blog.csdn.net/albertfly/article/details/78493245"}},[e._v("Next-key lock")]),e._v(")"),a("br"),e._v("\nheap size 1136 表示事务分配的锁堆内存大小,一般没有什么具体的用处。"),a("br"),e._v("\n27 row lock(s)表示当前事务持有的行记录锁/gap 锁的个数。"),a("br")]),e._v(" "),a("p",[a("strong",[e._v("MySQL thread id 47507030, OS thread handle 140485677401856, query id 25961909390 10.81.65.15 activity updating")]),e._v("\n表示一些ip地址，线程id等信息，基本没啥用。"),a("br")]),e._v(" "),a("p",[a("strong",[e._v("update Bwc_Win_Candidate SET state = 2 WHERE (  activity_id = '1034085677'and user_id = 15741 and extra_id ='1034085677' and extra_type = 1 )")]),e._v(" "),a("br"),e._v("\n表示事务1正在执行的sql，通常显示正在等待锁的sql。"),a("br")]),e._v(" "),a("p",[a("strong",[e._v("WAITING FOR THIS LOCK TO BE GRANTED")]),e._v(" "),a("br"),e._v("\n表示事务1等在等待锁。"),a("br")]),e._v(" "),a("p",[a("strong",[e._v("RECORD LOCKS space id 316 page no 316 n bits 256 index PRIMARY of table "),a("code",[e._v("DPCityActivity")]),e._v("."),a("code",[e._v("Bwc_Win_Candidate")]),e._v(" trx id 4795708646 lock_mode X locks rec but not gap waiting")]),e._v(" "),a("br"),e._v("\nRECORD LOCKS 表示记录锁，space id 为316（对应的聚集索引），page号为4，n bits 256 表示这个聚集索引记录锁上留有256个Bit位。后面表示正在等待Bwc_Win_Candidate表中的主键PRIMARY上的X锁释放。"),a("br"),e._v("\n分析后面的日志，可以看到事务二持有29593个行锁"),a("br")]),e._v(" "),a("p",[a("strong",[e._v("HOLDS THE LOCK(S):RECORD LOCKS space id 316 page no 316 n bits 256 index PRIMARY of table "),a("code",[e._v("DPCityActivity")]),e._v("."),a("code",[e._v("Bwc_Win_Candidate")]),e._v(" trx id 4795708632 lock_mode X")]),e._v("\n事务2 持有主键PRIMARY索引（index PRIMARY ）上的锁资源,space id为316"),a("br")]),e._v(" "),a("p",[a("strong",[e._v(") WAITING FOR THIS LOCK TO BE GRANTED:RECORD LOCKS space id 316 page no 317 n bits 256 index PRIMARY of table "),a("code",[e._v("DPCityActivity")]),e._v("."),a("code",[e._v("Bwc_Win_Candidate")]),e._v(" trx id 4795708632")]),e._v(" "),a("br"),e._v("\n事务2在等待主键PRIMARY上的索引的X锁释放。"),a("br"),e._v(" "),a("strong",[e._v("WE ROLL BACK TRANSACTION (1)")]),e._v(" "),a("br"),e._v("\n事务1回滚。")]),e._v(" "),a("p",[e._v("从日志可以分析出："),a("br"),e._v("\n事务1在执行sql 1的时候发生死锁，说明sql 1对应的行记录的锁被事务2占有； "),a("br"),e._v("\n事务2在执行sql 2的时候发生死锁，说明sql 2对应的行记录的锁被事务1占有；"),a("br"),e._v(" "),a("img",{attrs:{src:"http://p0.meituan.net/scarlett/2210520a58f4709d36a63e2778524a0a41841.jpg",width:"50%",height:"auto",div:"",align:"right/"}}),e._v(" "),a("br"),e._v("\n就是说sql扫描命中的行数过多，导致加锁的行数过多，在高并发情况下，发生了死锁。")]),e._v(" "),a("h2",{attrs:{id:"分析sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析sql"}},[e._v("#")]),e._v(" 分析sql")]),e._v(" "),a("p",[e._v("表结构：")]),e._v(" "),a("blockquote",[a("p",[e._v("PRIMARY KEY ("),a("code",[e._v("id")]),e._v("),"),a("br"),e._v("\nUNIQUE KEY "),a("code",[e._v("UK_A_B_U")]),e._v(" ("),a("code",[e._v("activity_id")]),e._v(","),a("code",[e._v("business_key")]),e._v(","),a("code",[e._v("user_id")]),e._v("),"),a("br"),e._v("\nKEY "),a("code",[e._v("IX_UpdateTime")]),e._v(" ("),a("code",[e._v("updateTime")]),e._v(")")])]),e._v(" "),a("p",[e._v("再看我写的sql语句:")]),e._v(" "),a("blockquote",[a("p",[e._v("update Bwc_Win_CandidateSET state = 2 WHERE (  activity_id = '1034085677' and user_id = 15***741 and extra_id = '1034085677 and extra_type = 1 )")])]),e._v(" "),a("p",[e._v("可以发现问题，虽然表中有了唯一索引，但是在更新查询时并不能命中唯一索引，因为where条件里面缺少business_key字段，无法命中唯一索引，就当是普通索引了，所以查询扫描是命中的行数才过多。"),a("a",{attrs:{href:"https://my.oschina.net/u/945573/blog/2985834"}},[e._v("联合索引原理解析")])]),a("hr"),e._v("\n解决方案：在查询的过程中加入business_key字段，保证全部命中联合唯一索引。"),a("p")])}),[],!1,null,null,null);t.default=i.exports}}]);