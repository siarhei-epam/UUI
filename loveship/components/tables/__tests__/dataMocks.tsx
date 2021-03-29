import { ArrayDataSource, DataColumnProps } from "@epam/uui";
import React from "react";

const personDemoData = [
    {
        id: 1,
        name: "Ken Sánchez",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-2.jpg",
        phoneNumber: "697-555-0142",
        jobTitle: "Chief Executive Officer",
        birthDate: "1969-01-29",
        gender: "M",
        hireDate: "2009-01-14",
        departmentId: 16,
        departmentName: "Executive",
    },
    {
        id: 2,
        name: "Terri Duffy",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-3.jpg",
        phoneNumber: "819-555-0175",
        jobTitle: "Vice President of Engineering",
        birthDate: "1971-08-01",
        gender: "F",
        hireDate: "2008-01-31",
        departmentId: 1,
        departmentName: "Engineering",
    },
    {
        id: 3,
        name: "Roberto Tamburello",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-4.jpg",
        phoneNumber: "212-555-0187",
        jobTitle: "Engineering Manager",
        birthDate: "1974-11-12",
        gender: "M",
        hireDate: "2007-11-11",
        departmentId: 1,
        departmentName: "Engineering",
    },
    {
        id: 4,
        name: "Rob Walters",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-5.jpg",
        phoneNumber: "612-555-0100",
        jobTitle: "Senior Tool Designer",
        birthDate: "1974-12-23",
        gender: "M",
        hireDate: "2007-12-05",
        departmentId: 2,
        departmentName: "Tool Design",
    },
    {
        id: 5,
        name: "Gail Erickson",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-6.jpg",
        phoneNumber: "849-555-0139",
        jobTitle: "Design Engineer",
        birthDate: "1952-09-27",
        gender: "F",
        hireDate: "2008-01-06",
        departmentId: 1,
        departmentName: "Engineering",
    },
    {
        id: 6,
        name: "Jossef Goldberg",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-7.jpg",
        phoneNumber: "122-555-0189",
        jobTitle: "Design Engineer",
        birthDate: "1959-03-11",
        gender: "M",
        hireDate: "2008-01-24",
        departmentId: 1,
        departmentName: "Engineering",
    },
    {
        id: 7,
        name: "Dylan Miller",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-8.jpg",
        phoneNumber: "181-555-0156",
        jobTitle: "Research and Development Manager",
        birthDate: "1987-02-24",
        gender: "M",
        hireDate: "2009-02-08",
        departmentId: 6,
        departmentName: "Research and Development",
    },
    {
        id: 8,
        name: "Diane Margheim",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-9.jpg",
        phoneNumber: "815-555-0138",
        jobTitle: "Research and Development Engineer",
        birthDate: "1986-06-05",
        gender: "F",
        hireDate: "2008-12-29",
        departmentId: 6,
        departmentName: "Research and Development",
    },
    {
        id: 9,
        name: "Gigi Matthew",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-10.jpg",
        phoneNumber: "185-555-0186",
        jobTitle: "Research and Development Engineer",
        birthDate: "1979-01-21",
        gender: "F",
        hireDate: "2009-01-16",
        departmentId: 6,
        departmentName: "Research and Development",
    },
    {
        id: 10,
        name: "Michael Raheem",
        personType: "EM",
        avatarUrl: "http://static.cdn.epam.com/uploads/140f76e9e74f90510a19dbed3ca4174a/EPM-TAI/avatars/phoenix/default-11.jpg",
        phoneNumber: "330-555-2568",
        jobTitle: "Research and Development Manager",
        birthDate: "1984-11-30",
        gender: "M",
        hireDate: "2009-05-03",
        departmentId: 6,
        departmentName: "Research and Development",
    },
];

export const dataSource = new ArrayDataSource({
    items: personDemoData,
});

export const demoColumns: DataColumnProps<any>[] = [
    {
        key: "id",
        caption: "ID",
        render: product => <div>{ product.id }</div>,
        isSortable: true,
        isAlwaysVisible: true,
        fix: "left",
        grow: 0,
        width: 96,
    },
    {
        key: "name",
        caption: "name",
        render: product => <div>{ product.id }</div>,
        isSortable: true,
        isAlwaysVisible: true,
        grow: 1,
        width: 200,
    },
    {
        key: "level",
        caption: "Level",
        render: product => <div>{ product.jobTitle }</div>,
        isSortable: true,
        width: 150,
        minWidth: 200,
    },
    {
        key: "date",
        caption: "DATE",
        render: product => <div>{ product.birthDate }</div>,
        isSortable: true,
        grow: 1,
        shrink: 0,
        width: 120,
    },
];