项目主要目录
====
## 1 - [resources](https://github.com/ITMasterC/gameTemplate/tree/master/assets/resources) : 该目录存放主要在代码中动态添加的资源。
* ***audio***：存放游戏音频资源 -- 该项目中的音效、背景音乐均为代码动态添加， 只需将音频资源放入该目录， 即可在代码中通过音频的名字调用音频。<br>
* ***prefab***：存放预制体资源<br>
	* ***appListPrefab***：存放的是微信导出相关的组件，头条包中可直接删除<br>
	* ***levelPrefabs***：一般关卡类的游戏，关卡使用预制体制作时，将关卡预制体放入此目录，可在代码[ **level_prefrabs** ](https://github.com/ITMasterC/gameTemplate/blob/master/assets/scripts/prefabs/level_prefabs.js)中通过预制体的名字初始化对应关卡<br>
	* ***pools***：存放游戏中需要使用对象池存放的相关预制体，代码中通过名字获取对应的预制体进行实例化，调用接口参考 [**ui_manager**](https://github.com/ITMasterC/gameTemplate/blob/master/assets/scripts/prefabs/ui_manager.js) 中关于pool的接口，具体实现可查看 [**pool_prefabs**](https://github.com/ITMasterC/gameTemplate/blob/master/assets/scripts/prefabs/pool_prefabs.js) 脚本。<br>
	* ***winPrefabs***：存放游戏中的弹窗预制体，游戏 *loadingScene* 加载过程中，会将该目录下的预制体加载好，当通过 [**ui_manager**](https://github.com/ITMasterC/gameTemplate/blob/master/assets/scripts/prefabs/ui_manager.js) 中对应的 *showPrefabWin* 接口获取对应的弹窗，并加载到场景上；具体实现可查看[**win_prefabs**](https://github.com/ITMasterC/gameTemplate/blob/master/assets/scripts/prefabs/win_prefabs.js) 脚本。<br>
<br>

## 2 - scene : 该目录存放的是游戏的场景文件

<br>

## 3 - [scripts](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts) : 脚本文件存放目录。
***PS: 主要可复用的公共脚本组件为：global_con文件夹、platfrom文件夹、prefabs文件夹一级目录下的几个脚本、scene_Scripts中的loadingScene脚本；相关布局可凭个人喜好***
* [***appListNode***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/appListNode)：微信跳转组件关联的脚本（可忽略）<br>
* [***con_data***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/con_data)：游戏数据以及用户数据控制脚本<br>
* [***con_Scripts***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/con_Scripts)：游戏中一些常用的脚本<br>
* [***global_con***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/global_con)：包含音频处理脚本和全局消息事件的单例<br>
* [***platfrom***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/platfrom)：平台相关组件
	* ***adEvent***：广告脚本
		* [**bannerEvent**](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/platfrom/adEvent/bannerEvent)：banner广告控制脚本。
		* [**interstitialEvent**](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/platfrom/adEvent/interstitialEvent)：插屏广告控制脚本。
		* [**videoEvent**](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/platfrom/adEvent/videoEvent)：视频广告控制脚本。
	* ***shareEvent***：包含分享组件脚本
	* ***tmEvent***：微信跳转天幕控制脚本
	* [***createVideo***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/platfrom/createVideo)：头条录屏控制器
	* [***moreGameEvent***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/platfrom/moreGameEvent)：头条更多游戏组件，将脚本拖到指定的节点上，会有偏差，需要调整对应的位置大小等信息
	* [***platfrom_fun***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/platfrom/platfrom_fun)：访问以上脚本的统一入口。
* [***prefabs***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/prefabs)：主要的公共组件为：**level_prefabs** 、 **pool_prefabs** 、**ui_manager** 、**win_prefabs**<br>
	* [***level_prefabs***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/prefabs/level_prefabs)：关卡实例化脚本
	* [***pool_prefabs***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/prefabs/level_prefabs)：预制体加载与实例化脚本
	* [***win_prefabs***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/prefabs/win_prefabs)：弹窗预制体资源加载与实例化脚本
	* [***ui_manager***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/prefabs/level_prefabs)：统一管理关卡、对象池、弹窗的脚本
* [***scene_Scripts***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/scene_Scripts/loadingScene)：
	* [***loadingScene***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/scene_Scripts/loadingScene)：游戏初始化加载场景
* [***commonFun***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/commonFun)：存放一下公共的方法
