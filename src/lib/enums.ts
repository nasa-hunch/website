// A very much temporary solution to a very big problem

export enum Role {
	STUDENT = 'STUDENT',
	UNVERIFIED_TEACHER = 'UNVERIFIED_TEACHER',
	TEACHER = 'TEACHER',
	ORG_ADMIN = 'ORG_ADMIN',
	HUNCH_ADMIN = 'HUNCH_ADMIN'
}

export type RoleString = 'STUDENT' | 'UNVERIFIED_TEACHER' | 'TEACHER' | 'ORG_ADMIN' | 'HUNCH_ADMIN';

export enum ProjectUserPermission {
	NEEDS_APPROVAL = 'NEEDS_APPROVAL',
	EDITOR = 'EDITOR',
	VIEWER = 'VIEWER'
}

export type ProjectUserPermissionString
	= 'NEEDS_APPROVAL'
	| 'EDITOR'
	| 'VIEWER';
