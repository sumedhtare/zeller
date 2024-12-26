export const roomNames = ['microwave', 'bed', 'chair', 'sofa', 'music', 'stove', 'bathtub'] as const;
export const virtualDeviceNames = ['AC', 'Curtain', 'Music', 'Projector', 'RGB', 'STB', 'TV'] as const;
export const deviceNames = ['fan', 'light_1', 'light_2', 'lamp_1', 'lamp_2', 'switch'] as const;

export type RoomName = typeof roomNames[number];
export type VirtualDeviceName = typeof virtualDeviceNames[number];
export type DeviceName = typeof deviceNames[number];

export const getDeviceImage = (name:DeviceName, value:number) => {
    switch (name) {
        case 'fan':
            if (value > 0)
                {return require('../../assets/images/devices/fan44.gif');}
            return require('../../assets/images/devices/fan4.png');
        case 'light_1':
            return require('../../assets/images/devices/light_1.png');
        case 'light_2':
            return require('../../assets/images/devices/light_2.png');
        case 'lamp_1':
            return require('../../assets/images/devices/lamp_1.png');
        case 'lamp_2':
            return require('../../assets/images/devices/lamp_2.png');
        case 'switch':
            return require('../../assets/images/devices/switch.png');
        default:
            return require('../../assets/images/devices/light_2.png');
    }
};

export const getRoomImage = (name:RoomName) => {
    switch (name) {
        case 'microwave':

            return require('../../assets/images/rooms/microwave.png');
        case 'bed':
            return require('../../assets/images/rooms/bed.png');
        case 'chair':
            return require('../../assets/images/rooms/chair.png');
        case 'sofa':
            return require('../../assets/images/rooms/sofa.png');
        case 'music':
            return require('../../assets/images/rooms/music.png');
        case 'stove':
            return require('../../assets/images/rooms/stove.png');
        case 'bathtub':
            return require('../../assets/images/rooms/bathtub.png');
        default:
            return require('../../assets/images/rooms/sofa.png');
    }
};

export const getVirtualDeviceImage = (name:VirtualDeviceName) => {
    switch (name) {
        case 'AC':
            return require('../../assets/images/devices/ac.png');
        case 'Curtain':
            return require('../../assets/images/devices/curtain.png');
        case 'Music':
            return require('../../assets/images/devices/music.png');
        case 'Projector':
            return require('../../assets/images/devices/projector.png');
        case 'RGB':
            return require('../../assets/images/devices/rgb_1.png');
        case 'STB':
            return require('../../assets/images/devices/stb.png');
        case 'TV':
            return require('../../assets/images/devices/tv.png');

        default:
            return require('../../assets/images/devices/switch.png');
    }
};


export const getRoomColor = (room: RoomName) => {
    switch (room) {
        case 'bed':
            return { linear: ['#FFF3E0', '#FFF3E0'], linear0: ['#fff', '#FFF3E0'], color: '#FFE0B2', text: '#000' };
        case 'chair':
            return { linear: ['#EEEEEE', '#EEEEEE'], linear0: ['#fff', '#EEEEEE'], color: '#E0E0E0', text: '#000' };
        case 'stove':
            return { linear: ['#EFEBE9', '#EFEBE9'], linear0: ['#fff', '#EFEBE9'], color: '#D7CCC8', text: '#000' };
        case 'bathtub':
            return { linear: ['#EEEEEE', '#EEEEEE'], linear0: ['#fff', '#EEEEEE'], color: '#E0E0E0', text: '#000' };
        case 'sofa':
            return { linear: ['#E3F2FD', '#E3F2FD'], linear0: ['#fff', '#E3F2FD'], color: '#BBDEFB', text: '#000' };
        case 'microwave':
            return { linear: ['#EFEBE9', '#EFEBE9'], linear0: ['#fff', '#EFEBE9'], color: '#E0E0E0', text: '#000' };
          default:
            return { linear: ['#EEEEEE', '#EEEEEE'], linear0: ['#fff', '#EEEEEE'], color: '#E0E0E0', text: '#000' };
    }
};

export const getRoutineColor = (color: string) => {
    switch (color) {
        case '#FFF3E0':
            return { linear: ['#FFF3E0', '#FFF3E0'], linear0: ['#fff', '#FFF3E0'], color: '#FFE0B2', text: '#000' };
        case '#EEEEEE':
            return { linear: ['#EEEEEE', '#EEEEEE'], linear0: ['#fff', '#EEEEEE'], color: '#E0E0E0', text: '#000' };
        case '#EFEBE9':
            return { linear: ['#EFEBE9', '#EFEBE9'], linear0: ['#fff', '#EFEBE9'], color: '#D7CCC8', text: '#000' };
        case '#E3F2FD':
            return { linear: ['#E3F2FD', '#E3F2FD'], linear0: ['#fff', '#E3F2FD'], color: '#BBDEFB', text: '#000' };
        default:
            return { linear: ['#EEEEEE', '#EEEEEE'], linear0: ['#fff', '#EEEEEE'], color: '#E0E0E0', text: '#000' };
    }
};
