package  com.mands.reactnativedevmenu;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;

public class DevMenuManager extends ReactContextBaseJavaModule {
  private ReactNativeHost mReactNativeHost;

  public DevMenuManager(ReactApplicationContext reactContext, ReactNativeHost reactNativeHost) {
    super(reactContext);
    mReactNativeHost = reactNativeHost;
  }

  @Override
  public String getName() {
    return "DevMenu";
  }

  @ReactMethod
  public void show() {
    UiThreadUtil.runOnUiThread(
      new Runnable() {
        @Override
        public void run() {
          if (mReactNativeHost != null) {
            mReactNativeHost.getReactInstanceManager().showDevOptionsDialog();
          }
        }
      }
    );
  }
}