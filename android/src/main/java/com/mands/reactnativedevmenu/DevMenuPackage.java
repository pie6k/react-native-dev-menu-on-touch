package com.mands.reactnativedevmenu;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DevMenuPackage implements ReactPackage {
  private ReactNativeHost mReactNativeHost;

  public DevMenuPackage(ReactNativeHost reactNativeHost) {
    super();
    mReactNativeHost = reactNativeHost;
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

  @Override
  public List<NativeModule> createNativeModules(
                              ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new DevMenuManager(reactContext, mReactNativeHost));

    return modules;
  }

}