export interface Member {
	name: string;
	active: boolean;
	lastUpdate: Date;
	loading?: boolean;
}

export interface Team {
	name: string;
	members: Member[];
	key?: any; //// Firebase key
}