import {Component, ViewChild} from '@angular/core';
import {Track} from 'projects/ngx-audio-player/src/public_api';
import {AudioPlayerComponent} from 'projects/ngx-audio-player/src/public_api';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;


    constructor() {
    }

    private fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';

    @ViewChild('player', {static: false})
    advancedPlayer: AudioPlayerComponent;

    // Single
    singleTrack: Track[] = [
        {
            title: 'In Love',
            link:
                'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
            duration: 227,
            artist: 'A Himitsu feat. Nori'
        }
    ];

    // Multiple
    multiple: Track[] = [
        {
            title: 'In Love',
            link:
                'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
            duration: 227,
            artist: 'A Himitsu feat. Nori'
        },
        {
            title: 'On & On (feat. Daniel Levi) [NCS Release]',
            link:
                'https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0',
            duration: 208,
            artist: 'Cartoon'
        }
    ];

    msaapPlaylist: Track[] = this.multiple;

    msaapDisplayTitle = true;
    msaapDisplayPlayList = true;
    pageSizeOptions = [2, 4, 6];

    msaapDisplayVolumeControls = true;
    msaapDisplayRepeatControls = true;
    msaapDisplayArtist = false;
    msaapDisplayDuration = false;
    msaapDisablePositionSlider = false;

    msaapTableHeader = 'My Playlist';
    msaapTitleHeader = 'My Title';
    msaapArtistHeader = 'My Artist';
    msaapDurationHeader = 'My Duration';


    // Start: Required for demo purpose

    msaapPlaylist2: Track[] = [
        {
            title: '1400',
            link: `${this.fmaBaseUrl}/no_curator/Yung_Kartz/August_2018/Yung_Kartz_-_10_-_1400.mp3`,
            duration: 212,
            artist: 'Yung Kartz'
        },
        {
            title: 'Epic Song',
            link: `${this.fmaBaseUrl}/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3`,
            duration: 54,
            artist: 'BoxCat Games'
        }
    ];

    msaapPlaylist3: Track[] = [
        {
            title: 'Hachiko (The Faithful Dog)',
            link: `${this.fmaBaseUrl}/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3`,
            duration: 185,
            artist: 'The Kyoto'
        },
        {
            title: 'Starling',
            link: `${this.fmaBaseUrl}/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3`,
            duration: 105,
            artist: 'Podington Bear'
        }
    ];

    currentTrack: Track = null;
    currentTime: any;

    appendTracksToPlaylistDisable = false;
    counter = 1;

    onEnded(event) {
        console.log(event);
        // your logic which needs to
        // be triggered once the
        // track ends goes here.

        // example
        this.currentTrack = null;
    }

    logCurrentTrack() {
        this.advancedPlayer.audioPlayerService.getCurrentTrack().subscribe(track => {
            this.currentTrack = track;
        });
    }

    logCurrentTime() {
        this.advancedPlayer.audioPlayerService.getCurrentTime().subscribe(time => {
            this.currentTime = time;
        });
    }

    consoleLogCurrentData() {
        // logCurrentTrack();
        // logCurrentTime();
        // Make sure to subscribe (by calling above methods)
        // before getting the data
        console.log(this.currentTrack.title + ' : ' + this.currentTime);
    }

    appendTracksToPlaylist() {

        if (this.msaapPlaylist.length === 1) {
            this.msaapPlaylist = this.multiple;
        } else if (this.msaapPlaylist.length === 2) {
            this.msaapPlaylist2.map(track => {
                this.msaapPlaylist.push(track);
            });
            this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
        } else if (this.msaapPlaylist.length === 4) {
            this.msaapPlaylist3.map(track => {
                this.msaapPlaylist.push(track);
            });
            this.advancedPlayer.audioPlayerService.setPlaylist(this.msaapPlaylist);
            this.appendTracksToPlaylistDisable = true;
        }
    }

    setSingleTrack() {
        this.msaapPlaylist = this.singleTrack;
        this.appendTracksToPlaylistDisable = false;
    }

    changeMsaapDisplayTitle(event) {
        this.msaapDisplayTitle = event.checked;
    }

    changeMsaapDisplayPlayList(event) {
        this.msaapDisplayPlayList = event.checked;
    }

    changeMsaapDisplayVolumeControls(event) {
        this.msaapDisplayVolumeControls = event.checked;
    }

    changeMsaapDisplayRepeatControls(event) {
        this.msaapDisplayRepeatControls = event.checked;
    }

    changeMsaapDisplayArtist(event) {
        this.msaapDisplayArtist = event.checked;
    }

    changeMsaapDisplayDuration(event) {
        this.msaapDisplayDuration = event.checked;
    }

    changeMsaapDisablePositionSlider(event) {
        this.msaapDisablePositionSlider = event.checked;
    }

    // End: Required for demo purpose
}
