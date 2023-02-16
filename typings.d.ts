interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type:image;
    asset:{
        _ref: string;
        _type: "reference";
    }
        
}

interface File {
    _type:file;
    asset:{
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody {
    _type: pageInfo;
    AboutPage: string;
    aboutPic: Image;
    email: string;
    location: string;
    myName: string;
    phoneNumber: string;
    profilePicture: Image;
    resume: File;
    role: string;
}

export interface Categories extends SanityBody {
    _type: categories;
    name: string;
}

export interface Experience extends SanityBody {
    _type: experience;
    companyName: string;
    dateStarted: date;
    jobTitle: string;
}

export interface Socials extends SanityBody {
    _type: socials;
    title: string;
    link: string;
    socialImg: Image;
}

export interface Skills extends SanityBody {
    _type: skills;
    skill: string;
    skillImage: Image;
}

export interface Project extends SanityBody {
    _type: projects;
    categories: Categories[];
    image: Image;
    title: string;
}