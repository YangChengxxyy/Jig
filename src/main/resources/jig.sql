/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50647
 Source Host           : localhost:3306
 Source Schema         : jig

 Target Server Type    : MySQL
 Target Server Version : 50647
 File Encoding         : 65001

 Date: 10/03/2020 19:49:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cn_en
-- ----------------------------
DROP TABLE IF EXISTS `cn_en`;
CREATE TABLE `cn_en`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `english` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `chinese` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `english`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1184 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cn_en
-- ----------------------------
INSERT INTO `cn_en` VALUES (4, 'id', 'id');
INSERT INTO `cn_en` VALUES (5, 'name', '工夹具名字');
INSERT INTO `cn_en` VALUES (6, 'code', '工夹具代码');
INSERT INTO `cn_en` VALUES (7, 'model', '工夹具模组');
INSERT INTO `cn_en` VALUES (8, 'part_no', '工夹具料号');
INSERT INTO `cn_en` VALUES (9, 'family_id', '类别id');
INSERT INTO `cn_en` VALUES (10, 'family', '类别');
INSERT INTO `cn_en` VALUES (11, 'upl', '每条产线所需');
INSERT INTO `cn_en` VALUES (12, 'user_for', '用途');
INSERT INTO `cn_en` VALUES (13, 'pm_period', '保养检点周期');
INSERT INTO `cn_en` VALUES (14, 'owner', '责任人id');
INSERT INTO `cn_en` VALUES (15, 'owner_name', '责任人');
INSERT INTO `cn_en` VALUES (16, 'rec_time', '录入时间');
INSERT INTO `cn_en` VALUES (17, 'rec_by', '录入人id');
INSERT INTO `cn_en` VALUES (18, 'rec_by_name', '录入人');
INSERT INTO `cn_en` VALUES (19, 'edit_time', '修改时间');
INSERT INTO `cn_en` VALUES (20, 'edit_by', '修改人id');
INSERT INTO `cn_en` VALUES (21, 'edit_by_name', '修改人');
INSERT INTO `cn_en` VALUES (22, 'workcell_id', '工作部门id');
INSERT INTO `cn_en` VALUES (23, 'workcell', '工作部门');
INSERT INTO `cn_en` VALUES (24, 'remark', '备注');
INSERT INTO `cn_en` VALUES (25, 'JigDefinition', '工夹具定义');
INSERT INTO `cn_en` VALUES (26, 'submit_id', '采购人id');
INSERT INTO `cn_en` VALUES (27, 'submit_name', '采购人');
INSERT INTO `cn_en` VALUES (28, 'count', '数量');
INSERT INTO `cn_en` VALUES (29, 'submit_time', '申请时间');
INSERT INTO `cn_en` VALUES (30, 'first_time', '初审时间');
INSERT INTO `cn_en` VALUES (31, 'first_acceptor', '初审人id');
INSERT INTO `cn_en` VALUES (32, 'first_acceptor_name', '初审人');
INSERT INTO `cn_en` VALUES (33, 'first_reason', '初审未通过原因');
INSERT INTO `cn_en` VALUES (34, 'final_time', '终审时间');
INSERT INTO `cn_en` VALUES (35, 'final_acceptor', '终审人id');
INSERT INTO `cn_en` VALUES (36, 'final_acceptor_name', '终审人');
INSERT INTO `cn_en` VALUES (37, 'final_reason', '终审未通过原因');
INSERT INTO `cn_en` VALUES (38, 'status', '状态');
INSERT INTO `cn_en` VALUES (39, 'production_line_id', '产线id');
INSERT INTO `cn_en` VALUES (40, 'production_line_name', '产线');
INSERT INTO `cn_en` VALUES (41, 'bill_no', '单据号');
INSERT INTO `cn_en` VALUES (42, 'tool_photo_url', '故障图片路径');
INSERT INTO `cn_en` VALUES (43, 'PurchaseIncomeHistory', '历史采购');
INSERT INTO `cn_en` VALUES (44, 'used_count', '寿命计数');
INSERT INTO `cn_en` VALUES (45, 'ScrapSubmit', '报废申请');
INSERT INTO `cn_en` VALUES (46, 'ScrapHistory', '报废历史');
INSERT INTO `cn_en` VALUES (47, 'email', '邮箱');
INSERT INTO `cn_en` VALUES (48, 'phone', '手机号码');
INSERT INTO `cn_en` VALUES (49, 'position', '职位');
INSERT INTO `cn_en` VALUES (50, 'password', '密码');
INSERT INTO `cn_en` VALUES (51, 'entry_date', '入职时间');
INSERT INTO `cn_en` VALUES (52, 'avatar_url', '头像照片');
INSERT INTO `cn_en` VALUES (53, 'user_name', '用户名');
INSERT INTO `cn_en` VALUES (54, 'type', '权限级别');

-- ----------------------------
-- Table structure for jig_definition
-- ----------------------------
DROP TABLE IF EXISTS `jig_definition`;
CREATE TABLE `jig_definition`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `model` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `part_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `family_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '定义实体类时，添加family',
  `workcell_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '定义实体类时，添加workcell',
  `upl` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `user_for` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `pm_period` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `owner` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `rec_time` datetime(0) NULL DEFAULT NULL,
  `rec_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `edit_time` datetime(0) NULL DEFAULT NULL,
  `edit_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1184 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of jig_definition
-- ----------------------------
INSERT INTO `jig_definition` VALUES (1091, 'MOD 3XM2 调谐夹具', 'EF2189', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '3', '打调谐盖板', '30', '1230936', '2019-07-04 16:09:08', '1215072', '2019-07-04 16:09:08', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1092, 'MOD 3XM2 陶瓷安装夹具', 'EF2191', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', '陶瓷安装', '30', '1230936', '2019-07-04 16:10:56', '1215072', '2019-07-04 16:10:56', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1093, 'MOD 3XM2 陶瓷组装夹具', 'EF0789', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', '陶瓷组装', '30', '1230936', '2019-07-04 16:12:09', '1215072', '2019-07-04 16:12:09', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1094, 'MOD 防旋转夹具', 'EF2185', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', '波导防旋转', '30', '1230936', '2019-07-04 16:13:01', '1215072', '2019-07-04 16:13:01', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1095, 'MOD 盖板螺丝夹具', 'EF2187', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'AIB盖板螺丝', '30', '1230936', '2019-07-04 16:13:43', '1215072', '2019-07-04 16:13:43', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1096, 'MOD 底座夹具', 'EF2188', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', 'MOD 底座', '30', '1230936', '2019-07-04 16:14:38', '1215072', '2019-07-04 16:14:38', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1097, 'MOD 波导防旋转夹具', 'EF2203', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', 'MOD 波导防旋转', '30', '1230936', '2019-07-04 16:15:18', '1215072', '2019-07-04 16:15:18', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1098, 'MOD 盖板螺丝夹具', 'EF2190', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '3', 'MOD 打盖板螺丝', '30', '1230936', '2019-07-04 16:16:52', '1215072', '2019-07-04 16:16:52', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1101, 'MOD 3XM2 保护夹具', 'EF2186', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', '保护', '30', '1230936', '2019-07-12 08:02:37', '1215072', '2019-07-12 08:02:37', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1102, 'MOD 3XM2 防旋转夹具', 'EF2184', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', 'MOD 3XM2 防旋转', '30', '1230936', '2019-07-12 08:03:57', '1215072', '2019-07-12 08:03:57', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1103, 'MOD 3XM2 最终组装夹具', 'EF2192', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 最终组装', '30', '1230936', '2019-07-12 08:04:40', '1215072', '2019-07-12 08:04:40', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1109, 'MOD 3XM2 耦合防旋转夹具1', 'EF2208', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 RX耦合防旋转', '30', '1230936', '2019-07-16 15:14:48', '1215072', '2019-07-16 15:14:48', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1110, 'MOD 3XM2 交叉耦合防旋转夹具', 'EF2207', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 交叉耦合防旋转', '30', '1230936', '2019-07-16 15:16:26', '1215072', '2019-07-16 15:16:26', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1111, 'MOD 3XM2 RX耦合防旋转夹具2', 'EF2209', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 RX耦合防旋转', '30', '1230936', '2019-07-16 15:17:46', '1215072', '2019-07-16 15:17:46', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1123, 'MOD 刷锡膏夹具', 'EF0798', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', 'MOD 刷锡膏', '30', '1230936', '2019-07-18 15:59:14', '1215072', '2019-07-18 15:59:14', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1124, 'MOD 盖板螺丝夹具', 'EF2210', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '3', 'MOD 盖板螺丝', '30', '1230936', '2019-07-18 16:00:26', '1215072', '2019-07-18 16:00:26', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1176, 'MOD 3XM2 防旋转夹具1', 'EF2234', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:03:06', '1215072', '2019-11-01 08:23:05', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1177, 'MOD 3XM2 防旋转夹具2', 'EF2235', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:04:20', '1215072', '2019-11-01 08:23:25', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1178, 'MOD 3XM2 防旋转夹具1', 'EF2236', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:05:13', '1215072', '2019-11-01 08:23:43', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1179, 'MOD 3XM2 防旋转夹具2', 'EF2237', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:06:12', '1215072', '2019-11-01 08:23:59', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1180, 'MOD 3XM2 防旋转夹具1', 'EF2238', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:06:46', '1215072', '2019-11-01 08:24:14', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1181, 'MOD 3XM2 防旋转夹具2', 'EF2239', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:07:29', '1215072', '2019-11-01 08:24:31', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1182, 'MOD 3XM2 防旋转夹具1', 'EF2240', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:08:10', '1215072', '2019-11-01 08:24:51', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1183, 'MOD 3XM2 防旋转夹具2', 'EF2241', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:08:44', '1215072', '2019-11-07 10:00:53', '1284663', NULL);

-- ----------------------------
-- Table structure for jig_entity
-- ----------------------------
DROP TABLE IF EXISTS `jig_entity`;
CREATE TABLE `jig_entity`  (
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `seq_id` int(11) NOT NULL,
  `bill_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `reg_date` datetime(0) NULL DEFAULT NULL,
  `used_count` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`code`, `seq_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of jig_entity
-- ----------------------------
INSERT INTO `jig_entity` VALUES ('EF0789', 1, 'BO19070500000002', '2019-07-05 16:42:00', 3);
INSERT INTO `jig_entity` VALUES ('EF0789', 2, 'BO19070500000001', '2019-07-05 16:42:00', 32);
INSERT INTO `jig_entity` VALUES ('EF0798', 1, 'BO19072900000018', '2019-07-29 08:54:00', 0);
INSERT INTO `jig_entity` VALUES ('EF0798', 2, 'BO19090900000002', '2019-09-11 08:45:00', 5);
INSERT INTO `jig_entity` VALUES ('EF2184', 1, 'BO19071200000004', '2019-07-12 09:03:00', 2);
INSERT INTO `jig_entity` VALUES ('EF2184', 2, 'BO19071200000003', '2019-07-12 09:03:00', 1);
INSERT INTO `jig_entity` VALUES ('EF2185', 1, 'BO19070600000006', '2019-07-09 15:48:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2185', 2, 'BO19070900000003', '2019-07-10 08:50:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2186', 1, 'BO19071200000002', '2019-07-12 09:03:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2187', 1, 'BO19070500000003', '2019-07-05 16:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2188', 1, 'BO19070500000005', '2019-07-05 16:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2188', 2, 'BO19070500000004', '2019-07-05 16:42:00', 23);
INSERT INTO `jig_entity` VALUES ('EF2189', 1, 'BO19070600000007', '2019-07-09 15:48:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2189', 2, 'BO19082700000002', '2019-08-27 09:24:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2189', 3, 'BO19082700000001', '2019-08-27 09:24:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2190', 1, 'BO19070500000006', '2019-07-05 16:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2190', 2, 'BO19070600000005', '2019-07-09 15:48:00', 45);
INSERT INTO `jig_entity` VALUES ('EF2190', 3, 'BO19070600000004', '2019-07-09 15:48:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2191', 1, 'BO19070500000007', '2019-07-05 16:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2192', 1, 'BO19071200000005', '2019-07-12 09:03:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2203', 3, 'BO19080900000001', '2019-08-09 16:32:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2203', 4, 'BO19080900000002', '2019-08-09 16:33:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2207', 1, 'BO19071600000002', '2019-07-16 16:09:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2208', 1, 'BO19071600000003', '2019-07-16 16:09:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2209', 1, 'BO19071600000004', '2019-07-16 16:09:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2210', 1, 'BO19072900000030', '2019-07-29 08:53:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2210', 2, 'BO19080200000015', '2019-08-07 08:35:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2210', 3, 'BO19080200000014', '2019-08-07 08:35:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2234', 1, 'BO19103100000001', '2019-10-31 12:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2235', 1, 'BO19103100000002', '2019-10-31 12:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2236', 1, 'BO19103100000003', '2019-10-31 12:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2237', 1, 'BO19103100000004', '2019-10-31 12:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2238', 1, 'BO19103100000005', '2019-10-31 12:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2239', 1, 'BO19103100000006', '2019-10-31 12:42:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2240', 1, 'BO19103100000007', '2019-10-31 12:41:00', 0);
INSERT INTO `jig_entity` VALUES ('EF2241', 1, 'BO19103100000008', '2019-10-31 12:41:00', 0);

-- ----------------------------
-- Table structure for jig_family
-- ----------------------------
DROP TABLE IF EXISTS `jig_family`;
CREATE TABLE `jig_family`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `family` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of jig_family
-- ----------------------------
INSERT INTO `jig_family` VALUES ('79', 'JABIL FU');

-- ----------------------------
-- Table structure for jig_part_no
-- ----------------------------
DROP TABLE IF EXISTS `jig_part_no`;
CREATE TABLE `jig_part_no`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of jig_part_no
-- ----------------------------
INSERT INTO `jig_part_no` VALUES (1, 'PNA90320/1');
INSERT INTO `jig_part_no` VALUES (2, 'PNA90320/2');
INSERT INTO `jig_part_no` VALUES (3, 'PNA90322/1');

-- ----------------------------
-- Table structure for jig_position
-- ----------------------------
DROP TABLE IF EXISTS `jig_position`;
CREATE TABLE `jig_position`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` int(11) NULL DEFAULT NULL,
  `jig_cabinet_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `location_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `bin` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '0 未在库 1 出库 2 在维修',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of jig_position
-- ----------------------------
INSERT INTO `jig_position` VALUES (1, 'EF0789', 1, '16', 'A2', NULL, '0');
INSERT INTO `jig_position` VALUES (2, 'EF0789', 2, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (3, 'EF0798', 1, '7', 'A1', NULL, '1');
INSERT INTO `jig_position` VALUES (4, 'EF0798', 2, '7', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (5, 'EF2184', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (6, 'EF2184', 2, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (7, 'EF2185', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (8, 'EF2185', 2, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (9, 'EF2186', 1, '16', 'A1', '1', '1');
INSERT INTO `jig_position` VALUES (10, 'EF2187', 1, '16', 'A1', '2', '1');
INSERT INTO `jig_position` VALUES (11, 'EF2188', 1, '8', 'A2', '2', '1');
INSERT INTO `jig_position` VALUES (12, 'EF2188', 2, '8', 'A2', '1', '1');
INSERT INTO `jig_position` VALUES (13, 'EF2189', 1, '8', 'B2', '1', '1');
INSERT INTO `jig_position` VALUES (14, 'EF2189', 2, '8', 'C2', '1', '1');
INSERT INTO `jig_position` VALUES (15, 'EF2189', 3, '8', 'B2', '2', '1');
INSERT INTO `jig_position` VALUES (16, 'EF2190', 1, '16', 'A1', '5', '1');
INSERT INTO `jig_position` VALUES (17, 'EF2190', 2, '16', 'A1', '4', '1');
INSERT INTO `jig_position` VALUES (18, 'EF2190', 3, '16', 'A1', '3', '1');
INSERT INTO `jig_position` VALUES (19, 'EF2191', 1, '8', 'C2', '2', '1');
INSERT INTO `jig_position` VALUES (20, 'EF2192', 1, '8', 'A2', '3', '1');
INSERT INTO `jig_position` VALUES (21, 'EF2203', 3, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (22, 'EF2203', 4, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (23, 'EF2207', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (24, 'EF2208', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (25, 'EF2209', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (26, 'EF2210', 1, '8', 'C1', '4', '0');
INSERT INTO `jig_position` VALUES (27, 'EF2210', 2, '8', 'C1', '6', '1');
INSERT INTO `jig_position` VALUES (28, 'EF2210', 3, '8', 'C1', '5', '1');
INSERT INTO `jig_position` VALUES (29, 'EF2234', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (30, 'EF2235', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (31, 'EF2236', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (32, 'EF2237', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (33, 'EF2238', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (34, 'EF2239', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (35, 'EF2240', 1, '16', 'A2', NULL, '1');
INSERT INTO `jig_position` VALUES (36, 'EF2241', 1, '16', 'A2', NULL, '1');

-- ----------------------------
-- Table structure for maintenance_type
-- ----------------------------
DROP TABLE IF EXISTS `maintenance_type`;
CREATE TABLE `maintenance_type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of maintenance_type
-- ----------------------------
INSERT INTO `maintenance_type` VALUES (1, '夹具是否有螺丝松动.');
INSERT INTO `maintenance_type` VALUES (2, '夹具是否有部件损坏.');
INSERT INTO `maintenance_type` VALUES (3, '夹具是否有钢套损坏掉落等不良.');
INSERT INTO `maintenance_type` VALUES (4, '夹具是否有机械部件松动.');
INSERT INTO `maintenance_type` VALUES (5, '夹具电路是否正常工作.');
INSERT INTO `maintenance_type` VALUES (6, '夹具是否有不正常的响声.');
INSERT INTO `maintenance_type` VALUES (7, '夹具是否牢固的固定在对应位置.');
INSERT INTO `maintenance_type` VALUES (8, '使用抹布或者刷子进行夹具清洁.');

-- ----------------------------
-- Table structure for outgo_income_history
-- ----------------------------
DROP TABLE IF EXISTS `outgo_income_history`;
CREATE TABLE `outgo_income_history`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime(0) NULL DEFAULT NULL,
  `submit_time` datetime(0) NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `status` int(2) NULL DEFAULT NULL COMMENT '出：0；入：1',
  `rec_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `rec_time` datetime(0) NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of outgo_income_history
-- ----------------------------
INSERT INTO `outgo_income_history` VALUES (1, NULL, '2020-01-29 11:06:10', '1230936', 0, '1215072', '2020-02-02 17:31:16', 'EF2184', 1);
INSERT INTO `outgo_income_history` VALUES (2, NULL, '2020-01-29 11:06:10', '1230936', 1, '1215072', '2020-02-02 17:36:16', 'EF2184', 1);
INSERT INTO `outgo_income_history` VALUES (3, NULL, '2020-01-30 09:05:34', '1215072', 0, '1215072', '2020-02-05 20:10:16', 'EF0789', 1);
INSERT INTO `outgo_income_history` VALUES (4, NULL, '2020-02-04 20:07:07', '1230936', 0, '1215072', '2020-02-05 20:12:48', 'EF2210', 1);

-- ----------------------------
-- Table structure for outgo_submit
-- ----------------------------
DROP TABLE IF EXISTS `outgo_submit`;
CREATE TABLE `outgo_submit`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `submit_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of outgo_submit
-- ----------------------------
INSERT INTO `outgo_submit` VALUES (2, 'EF2189', '1230936', '2020-02-05 20:06:13');
INSERT INTO `outgo_submit` VALUES (3, 'EF0798', '1215072', '2020-01-07 20:06:31');
INSERT INTO `outgo_submit` VALUES (5, 'EF2241', '1230936', '2020-02-02 20:07:55');
INSERT INTO `outgo_submit` VALUES (6, 'EF2209', '1215072', '2020-02-05 20:08:01');
INSERT INTO `outgo_submit` VALUES (7, 'EF2236', '1230936', '2020-02-05 20:08:17');
INSERT INTO `outgo_submit` VALUES (8, 'EF2239', '1230936', '2020-02-05 20:08:38');
INSERT INTO `outgo_submit` VALUES (9, 'EF2185', '1215072', '2020-02-05 20:08:50');
INSERT INTO `outgo_submit` VALUES (10, 'EF2191', '1215072', '2020-02-05 20:09:03');
INSERT INTO `outgo_submit` VALUES (11, 'EF2191', '1230936', '2020-02-05 20:09:20');

-- ----------------------------
-- Table structure for outgoing_jig
-- ----------------------------
DROP TABLE IF EXISTS `outgoing_jig`;
CREATE TABLE `outgoing_jig`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `submit_time` datetime(0) NULL DEFAULT NULL,
  `outgo_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of outgoing_jig
-- ----------------------------
INSERT INTO `outgoing_jig` VALUES (1, 'EF0789', '1', '1215072', '2020-01-30 09:05:34', '2020-02-05 20:10:16');
INSERT INTO `outgoing_jig` VALUES (2, 'EF2210', '1', '1230936', '2020-02-04 20:07:07', '2020-02-05 20:12:48');

-- ----------------------------
-- Table structure for privoder
-- ----------------------------
DROP TABLE IF EXISTS `privoder`;
CREATE TABLE `privoder`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for production_line
-- ----------------------------
DROP TABLE IF EXISTS `production_line`;
CREATE TABLE `production_line`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of production_line
-- ----------------------------
INSERT INTO `production_line` VALUES (9, 'BLKA10-L2');
INSERT INTO `production_line` VALUES (10, 'BLKA13_L2');
INSERT INTO `production_line` VALUES (11, 'BLKA14_L1');
INSERT INTO `production_line` VALUES (12, 'BLKA15-L2');
INSERT INTO `production_line` VALUES (13, 'BLKA15_L1');
INSERT INTO `production_line` VALUES (14, 'BLKA15_L3');
INSERT INTO `production_line` VALUES (15, 'BLKA15_L4');
INSERT INTO `production_line` VALUES (16, 'BLKA16_2');
INSERT INTO `production_line` VALUES (17, 'BLKA16_L2');
INSERT INTO `production_line` VALUES (18, 'BLKA18_L1');
INSERT INTO `production_line` VALUES (19, 'BLKC01_L1');
INSERT INTO `production_line` VALUES (20, 'BLKC01_L2');
INSERT INTO `production_line` VALUES (21, 'BLKC03_L1');
INSERT INTO `production_line` VALUES (22, 'BLKC05_L1');
INSERT INTO `production_line` VALUES (23, 'BLKC06_L1');
INSERT INTO `production_line` VALUES (24, 'BLKC06_L2');
INSERT INTO `production_line` VALUES (25, 'BLKC07_L1');
INSERT INTO `production_line` VALUES (26, 'BLKC07_L2');
INSERT INTO `production_line` VALUES (27, 'BLKC21_L1');
INSERT INTO `production_line` VALUES (28, 'BLKC21_L2');
INSERT INTO `production_line` VALUES (29, 'BLKC21_L3');
INSERT INTO `production_line` VALUES (30, 'BLKA09');
INSERT INTO `production_line` VALUES (31, 'MSUP');
INSERT INTO `production_line` VALUES (32, 'SAU');
INSERT INTO `production_line` VALUES (33, 'SCU');
INSERT INTO `production_line` VALUES (34, 'Super line');
INSERT INTO `production_line` VALUES (35, 'SXU 0501');

-- ----------------------------
-- Table structure for provider_supply
-- ----------------------------
DROP TABLE IF EXISTS `provider_supply`;
CREATE TABLE `provider_supply`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provider_id` int(11) NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `period` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for purchase_income_submit
-- ----------------------------
DROP TABLE IF EXISTS `purchase_income_submit`;
CREATE TABLE `purchase_income_submit`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `submit_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `count` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `submit_time` datetime(0) NULL DEFAULT NULL,
  `first_time` datetime(0) NULL DEFAULT NULL,
  `first_acceptor` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `final_time` datetime(0) NULL DEFAULT NULL,
  `final_acceptor` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '0待审核 1初审未通过 2初审通过 3终审未通过 4终审通过',
  `production_line_id` int(11) NULL DEFAULT NULL,
  `bill_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `tool_photo_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of purchase_income_submit
-- ----------------------------
INSERT INTO `purchase_income_submit` VALUES (1, '1230936', 'EF2238|EF2187', '5|1', '2020-02-03 09:36:01', NULL, NULL, '2020-03-08 10:03:34', '1230936', '3', 12, 'BO19070500000002', NULL);
INSERT INTO `purchase_income_submit` VALUES (2, '1230936', 'EF0789|EF2187|EF2191', '2|2|2', '2020-02-03 11:10:12', NULL, NULL, NULL, NULL, '0', 16, 'BO19070500002000', NULL);
INSERT INTO `purchase_income_submit` VALUES (3, '1230936', 'EF2189|EF0789', '1|19', '2020-02-03 15:42:43', NULL, NULL, NULL, NULL, '0', 9, '20200203', NULL);
INSERT INTO `purchase_income_submit` VALUES (4, '1230936', 'EF2191|EF2190', '1|3', '2020-02-03 15:45:38', NULL, NULL, NULL, NULL, '0', 9, '202002031545', NULL);
INSERT INTO `purchase_income_submit` VALUES (6, '1230936', 'EF0789|EF2203', '15|12', '2020-02-03 16:41:54', NULL, NULL, NULL, NULL, '0', 9, '202002031641', NULL);
INSERT INTO `purchase_income_submit` VALUES (7, '1230936', 'EF2203', '18', '2020-02-03 16:42:16', NULL, NULL, NULL, NULL, '0', 9, '202002031641', NULL);
INSERT INTO `purchase_income_submit` VALUES (8, '1230936', 'EF2189', '9', '2020-02-03 16:45:02', NULL, NULL, NULL, NULL, '0', 10, '202002031644', NULL);
INSERT INTO `purchase_income_submit` VALUES (9, '1230936', 'EF2189', '3', '2020-02-03 21:17:45', NULL, NULL, NULL, NULL, '0', 9, '202002032117', NULL);
INSERT INTO `purchase_income_submit` VALUES (11, '1230936', 'EF2191|EF2192|EF2184', '1|1|2', '2020-02-04 12:42:58', NULL, NULL, NULL, NULL, '0', 9, '202002041242', NULL);
INSERT INTO `purchase_income_submit` VALUES (12, '1230936', 'EF2188|EF2185|EF0798', '2|1|5', '2020-02-06 13:00:32', NULL, NULL, NULL, NULL, '0', 12, '202002061300', NULL);
INSERT INTO `purchase_income_submit` VALUES (13, '1230936', 'EF2191|EF2208|EF2234', '2|7|4', '2020-02-06 13:00:48', NULL, NULL, NULL, NULL, '0', 14, '202002061300', NULL);
INSERT INTO `purchase_income_submit` VALUES (15, '1230936', 'EF0789|EF2188|EF2190|EF2203', '2|4|3|2', '2020-02-06 17:28:18', NULL, NULL, NULL, NULL, '0', 12, '202002061727', NULL);
INSERT INTO `purchase_income_submit` VALUES (16, '1230936', 'EF0789', '1', '2020-02-09 13:44:36', NULL, NULL, NULL, NULL, '0', 11, '202002091344', NULL);
INSERT INTO `purchase_income_submit` VALUES (17, '1230736', 'EF2191|EF2189', '2|1', '2020-03-01 21:21:18', NULL, NULL, NULL, NULL, '0', 11, '202003012121', NULL);

-- ----------------------------
-- Table structure for purchase_income_submit_history
-- ----------------------------
DROP TABLE IF EXISTS `purchase_income_submit_history`;
CREATE TABLE `purchase_income_submit_history`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `submit_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `count` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `submit_time` datetime(0) NULL DEFAULT NULL,
  `first_time` datetime(0) NULL DEFAULT NULL,
  `first_acceptor` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `first_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `final_time` datetime(0) NULL DEFAULT NULL,
  `final_acceptor` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `final_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '0初审未通过 1 初审通过 2 终审未通过 3 终审通过 ',
  `production_line_id` int(11) NULL DEFAULT NULL,
  `bill_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `tool_photo_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of purchase_income_submit_history
-- ----------------------------
INSERT INTO `purchase_income_submit_history` VALUES (1, '1230936', 'EF2238|EF2187', '5|1', '2020-02-03 09:36:01', '2020-02-06 17:46:44', '1215072', NULL, NULL, NULL, NULL, '2', 12, '202002051524', NULL);
INSERT INTO `purchase_income_submit_history` VALUES (2, '1230936', 'EF2238|EF2187', '5|10', '2020-02-03 12:20:01', '2020-02-04 17:46:44', '1215072', NULL, '2020-02-05 19:19:29', '1215072', 'EF2187数量过多', '3', 12, '202002031220', NULL);

-- ----------------------------
-- Table structure for regular_maintenance
-- ----------------------------
DROP TABLE IF EXISTS `regular_maintenance`;
CREATE TABLE `regular_maintenance`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `pm_period` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `last_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for regular_maintenance_history
-- ----------------------------
DROP TABLE IF EXISTS `regular_maintenance_history`;
CREATE TABLE `regular_maintenance_history`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` int(11) NULL DEFAULT NULL,
  `reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '?|?|?  由‘|’符号分隔\r\n对照检修类型表\r\n',
  `check_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for repair_submit
-- ----------------------------
DROP TABLE IF EXISTS `repair_submit`;
CREATE TABLE `repair_submit`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` int(11) NULL DEFAULT NULL,
  `repair_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `repair_photo_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `submit_time` datetime(0) NULL DEFAULT NULL,
  `submit_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `acceptor_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `acceptor_time` datetime(0) NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of repair_submit
-- ----------------------------
INSERT INTO `repair_submit` VALUES (2, 'EF2189', 1, '123', 'images/repair_images/REPAIR-20200226083618645-c775a1e1-6c7e-42d4-a45f-45d53f01623c.png', '2020-02-26 08:36:18', '1215072', NULL, NULL, NULL);
INSERT INTO `repair_submit` VALUES (3, 'EF2191', 1, '手机上传测试', 'images/repair_images/REPAIR-20200226084302934-8d7c0146-1cb4-4aad-8389-8cb2d00c15d1.jpeg', '2020-02-26 08:43:48', '1215072', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for repair_submit_history
-- ----------------------------
DROP TABLE IF EXISTS `repair_submit_history`;
CREATE TABLE `repair_submit_history`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` int(11) NULL DEFAULT NULL,
  `repair_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `repair_photo_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `submit_time` datetime(0) NULL DEFAULT NULL,
  `submit_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `acceptor_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `acceptor_time` datetime(0) NULL DEFAULT NULL,
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '0待处理 1已处理',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for repairing_jig
-- ----------------------------
DROP TABLE IF EXISTS `repairing_jig`;
CREATE TABLE `repairing_jig`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` int(11) NULL DEFAULT NULL,
  `start_time` datetime(0) NULL DEFAULT NULL,
  `acceptor_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for scrap_submit
-- ----------------------------
DROP TABLE IF EXISTS `scrap_submit`;
CREATE TABLE `scrap_submit`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` int(11) NULL DEFAULT NULL,
  `submit_time` datetime(0) NULL DEFAULT NULL,
  `submit_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `used_count` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `scrap_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `scrap_photo_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `first_acceptor` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `first_time` datetime(0) NULL DEFAULT NULL,
  `first_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `final_acceptor` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `final_time` datetime(0) NULL DEFAULT NULL,
  `final_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '0待审核 1初审未通过 2初审通过 3终审未通过 4终审通过',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of scrap_submit
-- ----------------------------
INSERT INTO `scrap_submit` VALUES (1, 'EF2191', 1, '2020-02-16 22:14:54', '1215072', '0', '使用过久', 'images\\scrap_images\\SCRAP-20200216221454297-7dc40be3-55b9-404b-bf05-7a5c6036314d.JPG', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (4, 'EF2191', 1, '2020-02-17 08:33:15', '1215072', '0', '巴黎', 'images\\scrap_images\\SCRAP-20200217083315688-20c43e58-823b-48d4-bc73-620544365e24.jpg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (5, 'EF2185', 1, '2020-02-17 14:50:44', '1215072', '0', '`12', 'images\\scrap_images\\SCRAP-20200217145044791-6a7fdcc2-855a-4770-8fa5-5e8fafa503e0.JPG', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (7, 'EF2191', 1, '2020-02-17 15:58:43', '1215072', '0', 'hg', 'images\\scrap_images\\SCRAP-20200217155843667-296e7d10-1797-47db-811a-58af9c35a2c7.png', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (8, 'EF0789', 2, '2020-02-17 16:12:45', '1215072', '32', '夹具有自己的想法', 'images\\scrap_images\\SCRAP-20200217161245234-19d7cef1-f655-4e0e-8328-5a1db0c9e9ae.jpeg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (9, 'EF2185', 2, '2020-02-17 16:17:17', '1215072', '0', '得', 'images\\scrap_images\\SCRAP-20200217161717617-70e31b31-9ab5-4572-9ba5-9cbb6b6ee8c5.jpeg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (10, 'EF2188', 2, '2020-02-17 21:17:21', '1215072', '23', 'ceshi', 'images\\scrap_images\\SCRAP-20200217211721721-3b0d13f8-16d9-49d8-9e3b-40617bfc5902.jpg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (11, 'EF2188', 2, '2020-02-17 21:17:58', '1215072', '23', 'ceshi', 'images\\scrap_images\\SCRAP-20200217211758458-19b6e6e1-5015-45c1-8a70-8e26afca6e57.jpg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (12, 'EF2189', 1, '2020-02-19 10:14:27', '1215072', '0', 'asd ', 'images\\scrap_images\\SCRAP-20200219101427125-2b6012f7-934b-48af-9c12-68817f427675.JPG', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (13, 'EF2191', 1, '2020-02-19 10:18:20', '1215072', '0', 'asd', 'images\\scrap_images\\SCRAP-20200219101740828-19955475-e760-40c1-8be0-6e59353fea9f.jpg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (14, 'EF0789', 1, '2020-02-19 10:19:04', '1215072', '3', 'sdf ', 'images\\scrap_images\\SCRAP-20200219101904909-f74b3c4e-24b1-4fbc-9b81-c62184c62b36.JPG', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (15, 'EF0789', 2, '2020-02-19 10:20:02', '1215072', '32', '12', 'images\\scrap_images\\SCRAP-20200219101948308-4c66cbb8-2613-4b70-8de5-ebebea3fbbcb.jpg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (16, 'EF0789', 2, '2020-02-19 10:21:06', '1215072', '32', '123', 'images\\scrap_images\\SCRAP-20200219102031453-a6b98b2b-bcbc-4bb5-a4ab-e3b3c2896652.jpeg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (17, 'EF2187', 1, '2020-02-19 10:24:52', '1215072', '0', '123', 'images\\scrap_images\\SCRAP-20200219102421621-7afa87e6-cd3b-4e60-add3-887a4b5b8fdd.jpeg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (18, 'EF2189', 1, '2020-02-19 20:00:10', '1215072', '0', '阿萨德', 'images/scrap_images/SCRAP-20200219195927559-e640702d-b086-47c6-b24f-581885c2ad5e.jpeg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (19, 'EF2189', 1, '2020-02-20 21:27:30', '1215072', '0', '111', 'images/scrap_images/SCRAP-20200220212601593-9c674486-5d70-4936-8300-5e2d57a3da0e.jpeg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (20, 'EF2189', 1, '2020-02-23 14:57:52', '1215072', '0', 'asdasd', 'images/scrap_images/SCRAP-20200223145709296-2cc78bfd-3a95-4ced-927a-2d6cec4187ae.jpeg', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `scrap_submit` VALUES (21, 'EF2191', 1, '2020-03-03 21:29:31', '1230936', '0', '123', 'images/scrap_images/SCRAP-20200303212931396-31948bba-06d9-449e-8673-7e379eff108f.png', NULL, NULL, NULL, NULL, NULL, NULL, '0');

-- ----------------------------
-- Table structure for scrap_submit_history
-- ----------------------------
DROP TABLE IF EXISTS `scrap_submit_history`;
CREATE TABLE `scrap_submit_history`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `seq_id` int(11) NULL DEFAULT NULL,
  `submit_time` datetime(0) NULL DEFAULT NULL,
  `submit_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `used_count` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `scrap_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `scrap_photo_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `first_acceptor` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `first_time` datetime(0) NULL DEFAULT NULL,
  `first_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `final_acceptor` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `final_time` datetime(0) NULL DEFAULT NULL,
  `final_reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '0待审核 1初审未通过 2初审通过 3终审未通过 4终审通过',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `workcell_id` int(11) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `entry_date` date NULL DEFAULT NULL COMMENT '入职时间',
  `avatar_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '头像路径',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1215072', 'Xianghai Zhang', '1215072', 7, 'naive', '123@qq.com', NULL, '仓管员', NULL, NULL);
INSERT INTO `user` VALUES ('1230936', 'Lei Qian', '1230936', 7, 'high', '1111', NULL, '产线经理', NULL, NULL);
INSERT INTO `user` VALUES ('1234567', 'Yang Cheng', '1234567', 7, 'manager', '853364106@qq.com', NULL, 'CEO', NULL, NULL);
INSERT INTO `user` VALUES ('admin', 'Admin', 'admin', 7, 'admin', '853364106@qq.com', '19858198127', 'Boss', '2020-03-07', 'images/avatar_images/4.jpeg');

-- ----------------------------
-- Table structure for workcell
-- ----------------------------
DROP TABLE IF EXISTS `workcell`;
CREATE TABLE `workcell`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `workcell` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of workcell
-- ----------------------------
INSERT INTO `workcell` VALUES ('7', 'JW05');

-- ----------------------------
-- View structure for jig_definition_entity_view
-- ----------------------------
DROP VIEW IF EXISTS `jig_definition_entity_view`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `jig_definition_entity_view` AS select `jd`.`id` AS `id`,`jd`.`name` AS `name`,`jd`.`code` AS `code`,`jd`.`model` AS `model`,`jd`.`part_no` AS `part_no`,`jd`.`family_id` AS `family_id`,`jig_family`.`family` AS `family`,`jd`.`workcell_id` AS `workcell_id`,`workcell`.`workcell` AS `workcell`,`jd`.`upl` AS `upl`,`jd`.`user_for` AS `user_for`,`jd`.`pm_period` AS `pm_period`,`jd`.`owner` AS `owner`,`u1`.`name` AS `owner_name`,`jd`.`rec_time` AS `rec_time`,`jd`.`rec_by` AS `rec_by`,`u2`.`name` AS `rec_by_name`,`jd`.`edit_time` AS `edit_time`,`jd`.`edit_by` AS `edit_by`,`u3`.`name` AS `edit_by_name`,`jd`.`remark` AS `remark` from (((((`jig_definition` `jd` join `user` `u1`) join `user` `u2`) join `user` `u3`) join `workcell`) join `jig_family`) where ((`jd`.`owner` = `u1`.`id`) and (`jd`.`rec_by` = `u2`.`id`) and (`jd`.`edit_by` = `u3`.`id`) and (`jd`.`workcell_id` = `workcell`.`id`) and (`jd`.`family_id` = `jig_family`.`id`));

-- ----------------------------
-- View structure for jig_stock_view
-- ----------------------------
DROP VIEW IF EXISTS `jig_stock_view`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `jig_stock_view` AS select `jig_position`.`code` AS `code`,`jig_position`.`seq_id` AS `seq_id`,`jig_position`.`jig_cabinet_id` AS `jig_cabinet_id`,`jig_position`.`location_id` AS `location_id`,`jig_position`.`bin` AS `bin`,count(0) AS `count` from `jig_position` where (`jig_position`.`status` = '1') group by `jig_position`.`code`;

-- ----------------------------
-- View structure for outgoing_jig_entity_view
-- ----------------------------
DROP VIEW IF EXISTS `outgoing_jig_entity_view`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `outgoing_jig_entity_view` AS select `outgoing_jig`.`id` AS `id`,`outgoing_jig`.`code` AS `code`,`outgoing_jig`.`seq_id` AS `seq_id`,`jig_definition`.`name` AS `name`,`outgoing_jig`.`user_id` AS `user_id`,`user`.`name` AS `user_name`,`outgoing_jig`.`submit_time` AS `submit_time`,`outgoing_jig`.`outgo_time` AS `outgo_time`,`jig_position`.`jig_cabinet_id` AS `jig_cabinet_id`,`jig_position`.`location_id` AS `location_id`,`jig_position`.`bin` AS `bin` from (((`outgoing_jig` join `jig_position`) join `user`) join `jig_definition`) where ((`user`.`id` = `outgoing_jig`.`user_id`) and (`outgoing_jig`.`code` = `jig_position`.`code`) and (`outgoing_jig`.`seq_id` = `jig_position`.`seq_id`) and (`outgoing_jig`.`code` = `jig_definition`.`code`));

-- ----------------------------
-- View structure for outgo_submit_entity_view
-- ----------------------------
DROP VIEW IF EXISTS `outgo_submit_entity_view`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `outgo_submit_entity_view` AS select `outgo_submit`.`id` AS `id`,`outgo_submit`.`code` AS `code`,`outgo_submit`.`user_id` AS `user_id`,`outgo_submit`.`submit_time` AS `submit_time`,`jig_definition`.`name` AS `name`,`user`.`name` AS `user_name`,`jig_definition`.`user_for` AS `user_for`,sum(`jig_stock_view`.`count`) AS `count` from (((`jig_definition` join `outgo_submit`) join `user`) join `jig_stock_view`) where ((`jig_definition`.`code` = `outgo_submit`.`code`) and (`user`.`id` = `outgo_submit`.`user_id`) and (`jig_stock_view`.`code` = `outgo_submit`.`code`)) group by `outgo_submit`.`code`;

SET FOREIGN_KEY_CHECKS = 1;
