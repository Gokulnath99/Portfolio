import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'myName',
      title: 'MyName',
      type: 'string'
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string'
    }),
    defineField({
      name: 'profilePicture',
      title: 'ProfilePicture',
      type: 'image',
      options:{
        hotspot: true,
      }
    }),
    defineType({
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'number'
    }),
    defineType({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineType({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineType({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type:'reference', to:{type:'socials'} }]
    }),
    defineField({
      name: 'AboutPage',
      title: 'AboutPage',
      type: 'text'
    }),
    defineField({
      name: 'aboutPic',
      title: 'AboutPic',
      type: 'image',
      options: {
        hotspot: true,
      } 
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
    })
  ]
})
