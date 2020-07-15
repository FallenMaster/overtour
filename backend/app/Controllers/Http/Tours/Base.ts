import {DateTime} from 'luxon';

export default class BaseTour {
    public id: number;
    public title: string = '';
    public date_from: string = '';
    public date_to: string = '';
    public duration: number = 0;
    public image: string = '';
    public description: string = '';
    public price: number = 0;
    public difficulty: number = 0;
    public region: string = '';
    public tags: string[] = [];
    public link: string = '';
    public club: number = 0;
    public type: string = 'draft';
    // для описания ошибок добавления
    public post: {
        title?: string;
        date_from?: string;
        date_to?: string;
        duration?: number;
        image?: string;
        description?: string;
        price?: number;
        difficulty?: number;
        region?: string;
        tags?: string[];
        link?: string;
        club?: number;
    } = {};

    public getAllFields(): {title: string, club: number, date_to: DateTime, date_from: DateTime, link: string, type: string} {
        return {
            title: this.title,
            date_from: DateTime.fromISO(this.date_from),
            date_to: DateTime.fromISO(this.date_to),
            link: this.link,
            club: this.club,
            type: this.type,
        }
    }

    public getUnique(): object {
        return {
            title: this.title,
            date_from: this.date_from,
            date_to: this.date_to,
        }
    }

    public hasErrors(): boolean {
        return !!Object.entries(this.post).length;
    }

    public setPropsFromObject(obj): void {
        this.title = obj.title;
        this.date_from = obj.date_from.toISODate();
        this.date_to = obj.date_to.toISODate();
        this.club = obj.club;
        this.link = obj.link;
        this.duration = Math.floor(( Date.parse(this.date_to) - Date.parse(this.date_from) ) / 86400000) + 1;
    }
}
