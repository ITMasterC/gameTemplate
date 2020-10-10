项目主要目录
====
## 1 - [resources](https://github.com/ITMasterC/gameTemplate/tree/master/assets/resources) : 该目录存放主要在代码中动态添加的资源。
* ***audio***：存放游戏音频资源 -- 该项目中的音效、背景音乐均为代码动态添加， 只需将音频资源放入该目录， 即可在代码中通过音频的名字调用音频。<br>
* ***prefab***：存放预制体资源<br>
	* ***appListPrefab***：存放的是微信导出相关的组件，头条包中可直接删除<br>
	* ***levelPrefabs***：一般关卡类的游戏，关卡使用预制体制作时，将关卡预制体放入此目录，可在代码[ **level_prefrabs** ](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs/level_prefabs.js)中通过预制体的名字初始化对应关卡<br>
	* ***pools***：存放游戏中需要使用对象池存放的相关预制体，代码中通过名字获取对应的预制体进行实例化，调用接口参考 [**ui_manager**](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs/ui_manager.js) 中关于pool的接口，具体实现可查看 [**pool_prefabs**](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs/pool_prefabs.js) 脚本。<br>
	* ***winPrefabs***：存放游戏中的弹窗预制体，游戏 *loadingScene* 加载过程中，会将该目录下的预制体加载好，当通过 [**ui_manager**](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs/ui_manager.js) 中对应的 *showPrefabWin* 接口获取对应的弹窗，并加载到场景上；具体实现可查看[**win_prefabs**](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs/win_prefabs.js) 脚本。<br>
<br>

## 2 - scene : 该目录存放的是游戏的场景文件

<br>

## 3 - [scripts](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts) : 脚本文件存放目录。
***PS: 主要可复用的公共脚本组件为：global_con文件夹、platfrom文件夹、prefabs文件夹一级目录下的几个脚本、scene_Scripts中的loadingScene脚本；相关布局可凭个人喜好***
* [***appListNode***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/appListNode)：微信跳转组件关联的脚本（可忽略）<br>
* [***con_data***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/con_data)：游戏数据以及用户数据控制脚本<br>
* [***con_Scripts***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/con_Scripts)：游戏中一些常用的脚本<br>
* [***global_con***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/global_con)：包含音频处理脚本和全局消息事件的单例<br>
* [***platfrom***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/platfrom)：平台相关组件
	* ***adEvent***：广告脚本
		* [**bannerEvent**](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/platfrom/adEvent/bannerEvent.js)：banner广告控制脚本。
		* [**interstitialEvent**](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/platfrom/adEvent/interstitialEvent.js)：插屏广告控制脚本。
		* [**videoEvent**](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/platfrom/adEvent/videoEvent.js)：视频广告控制脚本。
	* ***shareEvent***：包含分享组件脚本
	* ***tmEvent***：微信跳转天幕控制脚本
	* [***createVideo***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/platfrom/createVideo.js)：头条录屏控制器
	* [***moreGameEvent***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/platfrom/moreGameEvent.js)：头条更多游戏组件，将脚本拖到指定的节点上，会有偏差，需要调整对应的位置大小等信息
	* [***platfrom_fun***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/platfrom/platfrom_fun.js)：访问以上脚本的统一入口。
* [***prefabs***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs)：主要的公共组件为：**level_prefabs** 、 **pool_prefabs** 、**ui_manager** 、**win_prefabs**<br>
	* [***level_prefabs***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs/level_prefabs.js)：关卡实例化脚本
	* [***pool_prefabs***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs/level_prefabs.js)：预制体加载与实例化脚本
	* [***win_prefabs***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs/win_prefabs.js)：弹窗预制体资源加载与实例化脚本
	* [***ui_manager***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/prefabs/ui_prefabs.js)：统一管理关卡、对象池、弹窗的脚本
* [***scene_Scripts***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/scene_Scripts/loadingScene)：
	* [***loadingScene***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/scene_Scripts/loadingScene.js)：游戏初始化加载场景
* [***commonFun***](https://github.com/ITMasterC/gameTemplate/tree/master/gameTemplatePro/assets/scripts/commonFun.js)：存放一些公共的方法

## 4 - [dyAbilityFun](https://github.com/ITMasterC/gameTemplate/tree/master/dyAbilityFun.js) : 抖音等平台api能力 -- 通过 _dy_ability_fun.functionName() 相关方式调用。
* ***showFavoriteGuide***：在小程序内调起关注小程序的引导组件，用于引导用户关注小程序。
* ***addShortcut***：添加到桌面。
* ***checkShortcut***：检查是否存在桌面快捷方式。
* ***addAttention***：关注抖音号  -- 仅抖音端支持。
* ***getVideoList***：获取通过小游戏发布的视频排行榜。
* ***getVideoUrls***：获取视频排行榜对应的视频封面图。

## 5 - [reportEvent，事件分析事件](https://github.com/ITMasterC/gameTemplate/tree/master/reportEvent.js) -- 达人视频分析案例 [文档](http://note.youdao.com/noteshare?id=4aae21ba922a6be4e9b98a5bd3e435d0)
* **init(author_id, video_id)**: 传入达人id、视频id进行初始化。
* **reportVideoData(reportName)**：通过 _report_event.reportVideoData("事件名称") 相关方式调用。

## 6 - [新增水波脚本]
