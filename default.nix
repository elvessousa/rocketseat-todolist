{ pkgs ? import <nixpkgs> {
    config = {
      allowUnfree = true;
      android_sdk.accept_license = true;
    };
  }
}:

let
  androidSdk = pkgs.androidenv.androidPkgs;
in
pkgs.mkShell {
  buildInputs = with pkgs; [
    # Android SDK and tools
    android-studio
    androidSdk.platform-tools
    
    # Core development tools
    jdk17
    gradle
    maven

    # Additional useful tools
    flutter
    dart
    
    # Basic development tools
    git
    gnumake
    watchman
  ];

  # Environment variables
  shellHook = ''
    export ANDROID_HOME="${androidSdk.platform-tools}/libexec/android-sdk"
    export ANDROID_SDK_ROOT="$ANDROID_HOME"
    export JAVA_HOME="${pkgs.jdk17}/lib/openjdk"
    export PATH="$ANDROID_HOME/emulator:$PATH"
    export PATH="$ANDROID_HOME/platform-tools:$PATH"
    export PATH="$ANDROID_HOME/tools:$PATH"
    export PATH="$ANDROID_HOME/tools/bin:$PATH"
    export PATH="$JAVA_HOME/bin:$PATH"
    
    echo "Android Development Environment Ready!"
    echo "Android SDK located at: $ANDROID_HOME"
    echo "Java Home located at: $JAVA_HOME"       
  '';
}
