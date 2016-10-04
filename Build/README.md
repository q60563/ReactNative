# 環境配置
安裝[Homebrew](http://brew.sh)
安裝Watchman(非必要)
```
$ brew install watchman
```
安裝flow(非必要)
```
$ brew install flow
```
安裝react-native-cli
```
$ npm install react-native-cli
```
# Android 環境配置
- 安裝[JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- 安裝android SDK
```
$ brew install android-sdk
```
# 設置環境變量
進入 ~/.bashrc 及 ~./bash_profile 增加以下內容
```
export ANDROID_HOME=/usr/local/opt/android-sdk
export GRADLE_HOME=/usr/local/opt/gradle
```

# 設置SDK
- 開啟Android SDK Manager。
```
$ android
```
- 安裝以下項目
 - Android SDK Build-tools version 23.0.1（版本選擇23.0.1）
 - Android 6.0 (API 23)
 - Local Maven repository for Support Libraries(之前叫做Android Support Repository)
 - 點擊 Install 安裝

# 安裝模擬器
模擬器可安裝Genymotion或AndroidStudio，這邊為安裝Genymotion。
- 安装[Genymotion](https://www.genymotion.com)。
- 安裝[VirtualBox](https://www.virtualbox.org)。
- 設定Genymotion：
 - 進入Settings設定ADB
 - 選取Use custom ANdroid SDK tools
 - 在Android SDK中輸入 /usr/local/opt/android-sdk
 - 建立一個模擬器並開啟
- 開啟USB偵錯
 - 進入 Settings -> About phone
 - 點選Build number 7下，用以開啟開發者模式。
 - 回到Settings點選Developer options開啟usb偵錯
