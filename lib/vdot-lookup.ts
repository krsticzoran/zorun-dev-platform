export interface VdotLookupEntry {
  vdot: number;
  time1500m: string;
  timeMile: string;
  time3000m: string;
  time2Mile: string;
  time5k: string;
  time10k: string;
  time15k: string;
  timeHalfMarathon: string;
  timeMarathon: string;
}

export const VDOT_LOOKUP_TABLE: VdotLookupEntry[] = [
  { vdot: 30, time1500m: "8:30", timeMile: "9:11", time3000m: "17:56", time2Mile: "19:19", time5k: "30:40", time10k: "63:46", time15k: "98:14", timeHalfMarathon: "2:21:04", timeMarathon: "4:49:17" },
  { vdot: 31, time1500m: "8:15", timeMile: "8:55", time3000m: "17:27", time2Mile: "18:48", time5k: "29:51", time10k: "62:03", time15k: "95:36", timeHalfMarathon: "2:17:21", timeMarathon: "4:41:57" },
  { vdot: 32, time1500m: "8:02", timeMile: "8:41", time3000m: "16:59", time2Mile: "18:18", time5k: "29:05", time10k: "60:26", time15k: "93:07", timeHalfMarathon: "2:13:49", timeMarathon: "4:34:59" },
  { vdot: 33, time1500m: "7:49", timeMile: "8:27", time3000m: "16:33", time2Mile: "17:50", time5k: "28:21", time10k: "58:54", time15k: "90:45", timeHalfMarathon: "2:10:27", timeMarathon: "4:28:22" },
  { vdot: 34, time1500m: "7:37", timeMile: "8:14", time3000m: "16:09", time2Mile: "17:24", time5k: "27:39", time10k: "57:26", time15k: "88:30", timeHalfMarathon: "2:07:16", timeMarathon: "4:22:03" },
  { vdot: 35, time1500m: "7:25", timeMile: "8:01", time3000m: "15:45", time2Mile: "16:58", time5k: "27:00", time10k: "56:03", time15k: "86:22", timeHalfMarathon: "2:04:13", timeMarathon: "4:16:03" },
  { vdot: 36, time1500m: "7:14", timeMile: "7:49", time3000m: "15:23", time2Mile: "16:34", time5k: "26:22", time10k: "54:44", time15k: "84:20", timeHalfMarathon: "2:01:19", timeMarathon: "4:10:19" },
  { vdot: 37, time1500m: "7:04", timeMile: "7:38", time3000m: "15:01", time2Mile: "16:11", time5k: "25:46", time10k: "53:29", time15k: "82:24", timeHalfMarathon: "1:58:34", timeMarathon: "4:04:50" },
  { vdot: 38, time1500m: "6:54", timeMile: "7:27", time3000m: "14:41", time2Mile: "15:49", time5k: "25:12", time10k: "52:17", time15k: "80:33", timeHalfMarathon: "1:55:55", timeMarathon: "3:59:35" },
  { vdot: 39, time1500m: "6:44", timeMile: "7:17", time3000m: "14:21", time2Mile: "15:29", time5k: "24:39", time10k: "51:09", time15k: "78:47", timeHalfMarathon: "1:53:24", timeMarathon: "3:54:34" },
  { vdot: 40, time1500m: "6:35", timeMile: "7:07", time3000m: "14:03", time2Mile: "15:08", time5k: "24:08", time10k: "50:03", time15k: "77:06", timeHalfMarathon: "1:50:59", timeMarathon: "3:49:45" },
  { vdot: 41, time1500m: "6:27", timeMile: "6:58", time3000m: "13:45", time2Mile: "14:49", time5k: "23:38", time10k: "49:01", time15k: "75:29", timeHalfMarathon: "1:48:40", timeMarathon: "3:45:09" },
  { vdot: 42, time1500m: "6:19", timeMile: "6:49", time3000m: "13:28", time2Mile: "14:31", time5k: "23:09", time10k: "48:01", time15k: "73:56", timeHalfMarathon: "1:46:27", timeMarathon: "3:40:43" },
  { vdot: 43, time1500m: "6:11", timeMile: "6:41", time3000m: "13:11", time2Mile: "14:13", time5k: "22:41", time10k: "47:04", time15k: "72:27", timeHalfMarathon: "1:44:20", timeMarathon: "3:36:28" },
  { vdot: 44, time1500m: "6:03", timeMile: "6:32", time3000m: "12:55", time2Mile: "13:56", time5k: "22:15", time10k: "46:09", time15k: "71:02", timeHalfMarathon: "1:42:17", timeMarathon: "3:32:23" },
  { vdot: 45, time1500m: "5:56", timeMile: "6:25", time3000m: "12:40", time2Mile: "13:40", time5k: "21:50", time10k: "45:16", time15k: "69:40", timeHalfMarathon: "1:40:20", timeMarathon: "3:28:26" },
  { vdot: 46, time1500m: "5:49", timeMile: "6:17", time3000m: "12:26", time2Mile: "13:25", time5k: "21:25", time10k: "44:25", time15k: "68:22", timeHalfMarathon: "1:38:27", timeMarathon: "3:24:39" },
  { vdot: 47, time1500m: "5:42", timeMile: "6:10", time3000m: "12:12", time2Mile: "13:10", time5k: "21:02", time10k: "43:36", time15k: "67:06", timeHalfMarathon: "1:36:38", timeMarathon: "3:21:00" },
  { vdot: 48, time1500m: "5:36", timeMile: "6:03", time3000m: "11:58", time2Mile: "12:55", time5k: "20:39", time10k: "42:50", time15k: "65:53", timeHalfMarathon: "1:34:53", timeMarathon: "3:17:29" },
  { vdot: 49, time1500m: "5:30", timeMile: "5:56", time3000m: "11:45", time2Mile: "12:41", time5k: "20:18", time10k: "42:04", time15k: "64:44", timeHalfMarathon: "1:33:12", timeMarathon: "3:14:06" },
  { vdot: 50, time1500m: "5:24", timeMile: "5:50", time3000m: "11:33", time2Mile: "12:28", time5k: "19:57", time10k: "41:21", time15k: "63:36", timeHalfMarathon: "1:31:35", timeMarathon: "3:10:49" },
  { vdot: 51, time1500m: "5:18", timeMile: "5:44", time3000m: "11:21", time2Mile: "12:15", time5k: "19:36", time10k: "40:39", time15k: "62:31", timeHalfMarathon: "1:30:02", timeMarathon: "3:07:39" },
  { vdot: 52, time1500m: "5:13", timeMile: "5:38", time3000m: "11:09", time2Mile: "12:02", time5k: "19:17", time10k: "39:59", time15k: "61:29", timeHalfMarathon: "1:28:31", timeMarathon: "3:04:36" },
  { vdot: 53, time1500m: "5:07", timeMile: "5:32", time3000m: "10:58", time2Mile: "11:50", time5k: "18:58", time10k: "39:20", time15k: "60:28", timeHalfMarathon: "1:27:04", timeMarathon: "3:01:39" },
  { vdot: 54, time1500m: "5:02", timeMile: "5:27", time3000m: "10:47", time2Mile: "11:39", time5k: "18:40", time10k: "38:42", time15k: "59:30", timeHalfMarathon: "1:25:40", timeMarathon: "2:58:47" },
  { vdot: 55, time1500m: "4:57", timeMile: "5:21", time3000m: "10:37", time2Mile: "11:28", time5k: "18:22", time10k: "38:06", time15k: "58:33", timeHalfMarathon: "1:24:18", timeMarathon: "2:56:01" },
  { vdot: 56, time1500m: "4:53", timeMile: "5:16", time3000m: "10:27", time2Mile: "11:17", time5k: "18:05", time10k: "37:31", time15k: "57:39", timeHalfMarathon: "1:23:00", timeMarathon: "2:53:20" },
  { vdot: 57, time1500m: "4:48", timeMile: "5:11", time3000m: "10:17", time2Mile: "11:06", time5k: "17:49", time10k: "36:57", time15k: "56:46", timeHalfMarathon: "1:21:43", timeMarathon: "2:50:45" },
  { vdot: 58, time1500m: "4:44", timeMile: "5:06", time3000m: "10:08", time2Mile: "10:56", time5k: "17:33", time10k: "36:24", time15k: "55:55", timeHalfMarathon: "1:20:30", timeMarathon: "2:48:14" },
  { vdot: 59, time1500m: "4:39", timeMile: "5:02", time3000m: "9:58", time2Mile: "10:46", time5k: "17:17", time10k: "35:52", time15k: "55:06", timeHalfMarathon: "1:19:18", timeMarathon: "2:45:47" },
  { vdot: 60, time1500m: "4:35", timeMile: "4:57", time3000m: "9:50", time2Mile: "10:37", time5k: "17:03", time10k: "35:22", time15k: "54:18", timeHalfMarathon: "1:18:09", timeMarathon: "2:43:25" },
  { vdot: 61, time1500m: "4:31", timeMile: "4:53", time3000m: "9:41", time2Mile: "10:27", time5k: "16:48", time10k: "34:52", time15k: "53:32", timeHalfMarathon: "1:17:02", timeMarathon: "2:41:08" },
  { vdot: 62, time1500m: "4:27", timeMile: "4:49", time3000m: "9:33", time2Mile: "10:18", time5k: "16:34", time10k: "34:23", time15k: "52:47", timeHalfMarathon: "1:15:57", timeMarathon: "2:38:54" },
  { vdot: 63, time1500m: "4:24", timeMile: "4:45", time3000m: "9:25", time2Mile: "10:10", time5k: "16:20", time10k: "33:55", time15k: "52:03", timeHalfMarathon: "1:14:54", timeMarathon: "2:36:44" },
  { vdot: 64, time1500m: "4:20", timeMile: "4:41", time3000m: "9:17", time2Mile: "10:01", time5k: "16:07", time10k: "33:28", time15k: "51:21", timeHalfMarathon: "1:13:53", timeMarathon: "2:34:38" },
  { vdot: 65, time1500m: "4:16", timeMile: "4:37", time3000m: "9:09", time2Mile: "9:53", time5k: "15:54", time10k: "33:01", time15k: "50:40", timeHalfMarathon: "1:12:53", timeMarathon: "2:32:35" },
  { vdot: 66, time1500m: "4:13", timeMile: "4:33", time3000m: "9:02", time2Mile: "9:45", time5k: "15:42", time10k: "32:35", time15k: "50:00", timeHalfMarathon: "1:11:56", timeMarathon: "2:30:36" },
  { vdot: 67, time1500m: "4:10", timeMile: "4:30", time3000m: "8:55", time2Mile: "9:37", time5k: "15:29", time10k: "32:11", time15k: "49:22", timeHalfMarathon: "1:11:00", timeMarathon: "2:28:40" },
  { vdot: 68, time1500m: "4:06", timeMile: "4:26", time3000m: "8:48", time2Mile: "9:30", time5k: "15:18", time10k: "31:46", time15k: "48:44", timeHalfMarathon: "1:10:05", timeMarathon: "2:26:47" },
  { vdot: 69, time1500m: "4:03", timeMile: "4:23", time3000m: "8:41", time2Mile: "9:23", time5k: "15:06", time10k: "31:23", time15k: "48:08", timeHalfMarathon: "1:09:12", timeMarathon: "2:24:57" },
  { vdot: 70, time1500m: "4:00", timeMile: "4:19", time3000m: "8:34", time2Mile: "9:16", time5k: "14:55", time10k: "31:00", time15k: "47:32", timeHalfMarathon: "1:08:21", timeMarathon: "2:23:10" },
  { vdot: 71, time1500m: "3:57", timeMile: "4:16", time3000m: "8:28", time2Mile: "9:09", time5k: "14:44", time10k: "30:38", time15k: "46:58", timeHalfMarathon: "1:07:31", timeMarathon: "2:21:26" },
  { vdot: 72, time1500m: "3:54", timeMile: "4:13", time3000m: "8:22", time2Mile: "9:02", time5k: "14:33", time10k: "30:16", time15k: "46:24", timeHalfMarathon: "1:06:42", timeMarathon: "2:19:44" },
  { vdot: 73, time1500m: "3:52", timeMile: "4:10", time3000m: "8:16", time2Mile: "8:55", time5k: "14:23", time10k: "29:55", time15k: "45:51", timeHalfMarathon: "1:05:54", timeMarathon: "2:18:05" },
  { vdot: 74, time1500m: "3:49", timeMile: "4:07", time3000m: "8:10", time2Mile: "8:49", time5k: "14:13", time10k: "29:34", time15k: "45:19", timeHalfMarathon: "1:05:08", timeMarathon: "2:16:29" },
  { vdot: 75, time1500m: "3:46", timeMile: "4:04", time3000m: "8:04", time2Mile: "8:43", time5k: "14:03", time10k: "29:14", time15k: "44:48", timeHalfMarathon: "1:04:23", timeMarathon: "2:14:55" },
  { vdot: 76, time1500m: "3:44", timeMile: "4:02", time3000m: "7:58", time2Mile: "8:37", time5k: "13:54", time10k: "28:55", time15k: "44:18", timeHalfMarathon: "1:03:39", timeMarathon: "2:13:23" },
  { vdot: 77, time1500m: "3:41", timeMile: "3:58", time3000m: "7:53", time2Mile: "8:31", time5k: "13:44", time10k: "28:36", time15k: "43:49", timeHalfMarathon: "1:02:56", timeMarathon: "2:11:54" },
  { vdot: 78, time1500m: "3:38.8", timeMile: "3:56.2", time3000m: "7:48", time2Mile: "8:25", time5k: "13:35", time10k: "28:17", time15k: "43:20", timeHalfMarathon: "1:02:15", timeMarathon: "2:10:27" },
  { vdot: 79, time1500m: "3:36.5", timeMile: "3:53.7", time3000m: "7:43", time2Mile: "8:20", time5k: "13:26", time10k: "27:59", time15k: "42:52", timeHalfMarathon: "1:01:34", timeMarathon: "2:09:02" },
  { vdot: 80, time1500m: "3:34.2", timeMile: "3:51.2", time3000m: "7:37.5", time2Mile: "8:14.2", time5k: "13:17.8", time10k: "27:41", time15k: "42:25", timeHalfMarathon: "1:00:54", timeMarathon: "2:07:38" },
  { vdot: 81, time1500m: "3:31.9", timeMile: "3:48.7", time3000m: "7:32.5", time2Mile: "8:08.9", time5k: "13:09.3", time10k: "27:24", time15k: "41:58", timeHalfMarathon: "1:00:15", timeMarathon: "2:06:17" },
  { vdot: 82, time1500m: "3:29.7", timeMile: "3:46.4", time3000m: "7:27.7", time2Mile: "8:03.7", time5k: "13:01.1", time10k: "27:07", time15k: "41:32", timeHalfMarathon: "59:38", timeMarathon: "2:04:57" },
  { vdot: 83, time1500m: "3:27.6", timeMile: "3:44.0", time3000m: "7:23.0", time2Mile: "7:58.6", time5k: "12:53.0", time10k: "26:51", time15k: "41:06", timeHalfMarathon: "59:01", timeMarathon: "2:03:50" },
  { vdot: 84, time1500m: "3:25.5", timeMile: "3:41.8", time3000m: "7:18.5", time2Mile: "7:53.6", time5k: "12:45.2", time10k: "26:34", time15k: "40:42", timeHalfMarathon: "58:25", timeMarathon: "2:02:24" },
  { vdot: 85, time1500m: "3:23.5", timeMile: "3:39.6", time3000m: "7:14.0", time2Mile: "7:48.8", time5k: "12:37.4", time10k: "26:19", time15k: "40:17", timeHalfMarathon: "57:50", timeMarathon: "2:01:10" }
];