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

 Date: 20/01/2020 21:06:51
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
) ENGINE = InnoDB AUTO_INCREMENT = 1093 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of jig_definition
-- ----------------------------
INSERT INTO `jig_definition` VALUES (1091, 'MOD 3XM2 调谐夹具', 'EF2189', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '3', '打调谐盖板', '30', '1230936', '2019-07-04 16:09:08', '1215072', '2019-07-04 16:09:08', '1215072', NULL);
INSERT INTO `jig_definition` VALUES (1092, 'MOD 3XM2 陶瓷安装夹具', 'EF2191', 'MOD 3XM2', 'PNA90320/1|PNA90320/2|PNA90322/1', '79', '7', '1', '陶瓷安装', '30', '1230936', '2019-07-04 16:10:56', '1215072', '2019-07-04 16:10:56', '1215072', NULL);

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

SET FOREIGN_KEY_CHECKS = 1;
