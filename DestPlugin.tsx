import {
    Plugin,
    PluginType,
    SegmentEvent
  } from '@segment/analytics-react-native';
  import { Platform, NativeModule } from 'react-native';

  import UserAgent from 'react-native-user-agent';

//Adds user agent info to events before sent downstream

  export class DestPlugin extends Plugin {
    // Note that `type` is set as a class property
    // If you do not set a type your plugin will be a `utility` plugin (see Plugin Types above)
    type = PluginType.enrichment;
  
    execute(event: SegmentEvent) {
      console.log(UserAgent.getUserAgent());
      if (Platform.OS !== 'android') {
        return;
      }
      
      if (event.context !== undefined) {
        event.context['userAgent'] = UserAgent.getUserAgent();
      }
      
      return event;
    }
  
  }
