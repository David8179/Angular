export interface Employees {
    eid: string;
    employee_name: string;
    designation: string;
    emp_work_mail: string;
    mobile_number: string;
}

export interface Groups {
    id: number;
    group_name: string;
    description: string;
    created_date: string;
    employees_list: number[];

}

export interface users {
    username: string,
    password: string
}

export interface events {
    id: number;
    event_name: string;
    description: string;
    event_date: string;
    event_location: string;
    event_employees_list: number[];
    created_date: string;
}

export interface polls {
    id: number;
    poll_name: string;
    options_list: number[];
    created_date: string;
    poll_start: string;
    poll_end: string;
    poll_employees_list: number[];
}

export interface Options {
    id: number;
    name: string;
    created_date: string;
}