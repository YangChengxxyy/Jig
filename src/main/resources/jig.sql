/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50643
 Source Host           : localhost:3306
 Source Schema         : jig

 Target Server Type    : MySQL
 Target Server Version : 50643
 File Encoding         : 65001

 Date: 21/01/2020 18:42:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
INSERT INTO `production_line` VALUES (34, 'Super   line');
INSERT INTO `production_line` VALUES (35, 'SXU 0501');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1215072', 'Xianghai Zhang');
INSERT INTO `user` VALUES ('1230936', 'Lei Qian');

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
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `jig_definition_entity_view` AS select `jd`.`id` AS `id`,`jd`.`name` AS `name`,`jd`.`code` AS `code`,`jd`.`model` AS `model`,`jd`.`part_no` AS `part_no`,`jd`.`family_id` AS `family_id`,`jd`.`workcell_id` AS `workcell_id`,`jd`.`upl` AS `upl`,`jd`.`user_for` AS `user_for`,`jd`.`pm_period` AS `pm_period`,`jd`.`owner` AS `owner`,`jd`.`rec_time` AS `rec_time`,`jd`.`rec_by` AS `rec_by`,`jd`.`edit_time` AS `edit_time`,`jd`.`edit_by` AS `edit_by`,`jd`.`remark` AS `remark`,`u1`.`name` AS `owner_name`,`u2`.`name` AS `rec_by_name`,`u3`.`name` AS `edit_by_name`,`workcell`.`workcell` AS `workcell`,`jig_family`.`family` AS `family` from (((((`jig_definition` `jd` join `user` `u1`) join `user` `u2`) join `user` `u3`) join `workcell`) join `jig_family`) where ((`jd`.`owner` = `u1`.`id`) and (`jd`.`rec_by` = `u2`.`id`) and (`jd`.`edit_by` = `u3`.`id`) and (`jd`.`workcell_id` = `workcell`.`id`) and (`jd`.`family_id` = `jig_family`.`id`));

-- ----------------------------
-- Records of workcell
-- ----------------------------
INSERT INTO `workcell` VALUES (1091, 'MOD 3XM2 调谐夹具', 'EF2189', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '3', '打调谐盖板', '30', '1230936', '2019-07-04 16:09:08', '1215072', '2019-07-04 16:09:08', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1092, 'MOD 3XM2 陶瓷安装夹具', 'EF2191', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', '陶瓷安装', '30', '1230936', '2019-07-04 16:10:56', '1215072', '2019-07-04 16:10:56', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1093, 'MOD 3XM2 陶瓷组装夹具', 'EF0789', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', '陶瓷组装', '30', '1230936', '2019-07-04 16:12:09', '1215072', '2019-07-04 16:12:09', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1094, 'MOD 防旋转夹具', 'EF2185', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', '波导防旋转', '30', '1230936', '2019-07-04 16:13:01', '1215072', '2019-07-04 16:13:01', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1095, 'MOD 盖板螺丝夹具', 'EF2187', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'AIB盖板螺丝', '30', '1230936', '2019-07-04 16:13:43', '1215072', '2019-07-04 16:13:43', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1096, 'MOD 底座夹具', 'EF2188', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', 'MOD 底座', '30', '1230936', '2019-07-04 16:14:38', '1215072', '2019-07-04 16:14:38', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1097, 'MOD 波导防旋转夹具', 'EF2203', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', 'MOD 波导防旋转', '30', '1230936', '2019-07-04 16:15:18', '1215072', '2019-07-04 16:15:18', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1098, 'MOD 盖板螺丝夹具', 'EF2190', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '3', 'MOD 打盖板螺丝', '30', '1230936', '2019-07-04 16:16:52', '1215072', '2019-07-04 16:16:52', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1101, 'MOD 3XM2 保护夹具', 'EF2186', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', '保护', '30', '1230936', '2019-07-12 08:02:37', '1215072', '2019-07-12 08:02:37', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1102, 'MOD 3XM2 防旋转夹具', 'EF2184', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', 'MOD 3XM2 防旋转', '30', '1230936', '2019-07-12 08:03:57', '1215072', '2019-07-12 08:03:57', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1103, 'MOD 3XM2 最终组装夹具', 'EF2192', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 最终组装', '30', '1230936', '2019-07-12 08:04:40', '1215072', '2019-07-12 08:04:40', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1109, 'MOD 3XM2 耦合防旋转夹具1', 'EF2208', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 RX耦合防旋转', '30', '1230936', '2019-07-16 15:14:48', '1215072', '2019-07-16 15:14:48', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1110, 'MOD 3XM2 交叉耦合防旋转夹具', 'EF2207', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 交叉耦合防旋转', '30', '1230936', '2019-07-16 15:16:26', '1215072', '2019-07-16 15:16:26', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1111, 'MOD 3XM2 RX耦合防旋转夹具2', 'EF2209', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 RX耦合防旋转', '30', '1230936', '2019-07-16 15:17:46', '1215072', '2019-07-16 15:17:46', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1123, 'MOD 刷锡膏夹具', 'EF0798', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '2', 'MOD 刷锡膏', '30', '1230936', '2019-07-18 15:59:14', '1215072', '2019-07-18 15:59:14', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1124, 'MOD 盖板螺丝夹具', 'EF2210', 'FU', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '3', 'MOD 盖板螺丝', '30', '1230936', '2019-07-18 16:00:26', '1215072', '2019-07-18 16:00:26', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1176, 'MOD 3XM2 防旋转夹具1', 'EF2234', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:03:06', '1215072', '2019-11-01 08:23:05', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1177, 'MOD 3XM2 防旋转夹具2', 'EF2235', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:04:20', '1215072', '2019-11-01 08:23:25', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1178, 'MOD 3XM2 防旋转夹具1', 'EF2236', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:05:13', '1215072', '2019-11-01 08:23:43', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1179, 'MOD 3XM2 防旋转夹具2', 'EF2237', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:06:12', '1215072', '2019-11-01 08:23:59', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1180, 'MOD 3XM2 防旋转夹具1', 'EF2238', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:06:46', '1215072', '2019-11-01 08:24:14', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1181, 'MOD 3XM2 防旋转夹具2', 'EF2239', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:07:29', '1215072', '2019-11-01 08:24:31', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');
INSERT INTO `workcell` VALUES (1182, 'MOD 3XM2 防旋转夹具1', 'EF2240', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', 'MOD 3XM2 防旋转', '30', '1230936', '2019-10-31 10:08:10', '1215072', '2019-11-01 08:24:51', '1215072', NULL, 'Lei Qian', 'Xianghai Zhang', 'Xianghai Zhang', 'JW05', 'JABIL FU');

SET FOREIGN_KEY_CHECKS = 1;
