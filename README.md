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
* [***appListNode***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/appListNode)：
* [***con_data***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/con_data)：
* [***con_Scripts***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/con_Scripts)：
* [***global_con***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/global_con)：
* [***platfrom***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/platfrom)：
* [***prefabs***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/prefabs)：
* [***scene_Scripts***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/scene_Scripts)：
* [***commonFun***](https://github.com/ITMasterC/gameTemplate/tree/master/assets/scripts/commonFun)：
