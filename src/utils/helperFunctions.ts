export const getAssetDetails = (data:any, assetNumber:number) => {
  let asset = Object.keys(data.Assets)[assetNumber];
  let roomsData = Object.keys(data.Assets[asset]);
  let mRoom = [];
  let totalSwitches = 0;
  let routines:any = [];
  let objRoutine:any = {};
  let mRoutines:any = [];
  let IRCode = '';
  for (let i = 0; i < roomsData.length; i++) {
    let roomdata = roomsData[i];
    let room = data.Assets[asset][roomdata];
    room.id = roomdata;
    room.asset = asset;
    if (room.id === 'Routines') {
      delete room.asset;
      delete room.id;
      IRCode = room.IRCode;
      delete room.IRCode;
      let tRoutines = Object.keys(room);
      for (let a = 0; a < tRoutines.length; a++) {
        if (tRoutines[a] === 'esp8266') {
          let esp8266Routines = Object.keys(room.esp8266);
          for (let b = 0; b < esp8266Routines.length; b++) {
            let esp8266Routine = room.esp8266[esp8266Routines[b]];
            objRoutine[esp8266Routines[b]] = esp8266Routine;
          }
        }
        routines.push({name: tRoutines[a], data: room[tRoutines[a]]});
      }
      for (let a = 0; a < routines.length; a++) {
        let routine = routines[a];
        if (objRoutine[routine] !== undefined) {
          routine.time = objRoutine[routine];
          mRoutines.push(routine);
        } else {
          mRoutines.push(routine);
        }
      }
    } else {
      let devices = room.Devices;
      let mDevices = [];
      if (devices !== undefined) {
        let devicesName = Object.keys(devices);
        for (let k = 0; k < devicesName.length; k++) {
          let deviceName = devicesName[k];
          let switchesData = devices[deviceName].Switches;
          let switches = [];
          let IRSwitchesData = [];
          let IRSwitches = [];
          let IRDevices:any = {};
          if (devices[deviceName].IRSwitches !== undefined) {
            IRSwitchesData = devices[deviceName].IRSwitches;

            for (let l = 0; l < IRSwitchesData.length; l++) {
              let mSwitch = IRSwitchesData[l];
              mSwitch.version = devices[deviceName].version;
              mSwitch.deviceType = devices[deviceName].type;
              mSwitch._id = deviceName;
              mSwitch.roomId = room.id;
              mSwitch.roomName = room.name;
              mSwitch.asset = room.asset;
              mSwitch.ip = devices[deviceName].localIP;
              totalSwitches++;
              IRSwitches.push(mSwitch);
            }
          }

          for (let l = 0; l < IRSwitches.length; l++) {
            let IRSwitche = IRSwitches[l];
            if (IRDevices[IRSwitche.image] === undefined) {
              IRDevices[IRSwitche.image] = [];
            }
            IRDevices[IRSwitche.image].push(IRSwitche);
          }

          for (let l = 0; l < switchesData.length; l++) {
            let mSwitch = switchesData[l];
            mSwitch.version = devices[deviceName].version;
            mSwitch.deviceType = devices[deviceName].type;
            mSwitch._id = deviceName;
            mSwitch.roomId = room.id;
            mSwitch.roomName = room.name;
            mSwitch.asset = room.asset;
            mSwitch.ip = devices[deviceName].localIP;
            totalSwitches++;
            switches.push(mSwitch);
          }
          let tDevice = {
            _id: deviceName,
            switches: switches,
            IRSwitches: IRDevices,
          };
          mDevices.push(tDevice);
        }
      }
      let tRoom = {
        devices: mDevices,
        _id: room.id,
        name: room.name,
        image: room.image,
        key: room.key,
        asset: room.asset,
        totalSwitches: totalSwitches,
      };
      mRoom.push(tRoom);
    }
    totalSwitches = 0;
  }
  return {
    rooms: mRoom,
    routines: mRoutines,
    username: data.Username,
    asset: asset,
    totalAssets: Object.keys(data.Assets),
    master: IRCode,
  };
};

export const getSwitchesFromDevices = (devices:any) => {
  let totalSwitches:any = [];
  if (devices !== undefined) {
    for (let i = 0; i < devices.length; i++) {
      let switches = devices[i].switches;
      totalSwitches = [...totalSwitches, ...switches];
    }
  }
  return totalSwitches;
};

export const getIRSwitchesFromDevices = (devices:any) => {
  let totalIRSwitches = {};
  if (devices !== undefined) {
    for (let i = 0; i < devices.length; i++) {
      if (devices[i].IRSwitches !== undefined) {
        let IRSwitches = devices[i].IRSwitches;
        totalIRSwitches = {...totalIRSwitches, ...IRSwitches};
      }
    }
  }
  return totalIRSwitches;
};

export function getParameterByName(name:string, url:string) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
