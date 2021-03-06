﻿/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
     ({
        "map": {
            "error": "無法建立地圖"
        },
        "tools":{
            "search":{
                "error": "無法找到位置",
                "notWhatYouWanted": "不是您想要的位置?",
                "selectAnother": "選擇其他位置",
                "currentLocation": "目前位置",
                "title": "位置"
            },
	    	"print": {
			    "layouts":{
			      "label1": '橫向',
			      "label2": '縱向',
			      "label3": '橫向',
			      "label4": '縱向'
			    },
			    "legend": "在輸出新增圖例",
                "title": "標題",
                "titlePrompt": "新增自訂標題"
            },
			"share": {
				"extent": "使用目前地圖範圍",
				"label": "分享此地圖",
				"link": "地圖連結",
				"facebook": "Facebook",
				"twitter": "Twitter"
			}
        },
        "tooltips":{
        	"home": "預設範圍",
        	"locate": "查詢我的位置",
        	"legend": "圖例",
        	"bookmarks": "書簽",
        	"layers": "圖層",
        	"basemap": "底圖庫",
        	"overview": "鷹眼圖",
        	"measure": "測量",
        	"edit": "編輯",
        	"time": "時間",
        	"print": "列印",
        	"details": "詳細資訊",
        	"share": "分享"
        }
    })
);
