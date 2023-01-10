import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    defineField({
      name: 'socialName',
      title: 'socialName',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'link',
      type: 'url'
    }),
    defineField({
      name: 'socialImg',
      title:'SocialImage',
      type:'image',
      options: {
        hotspot: true,
      }
    })
  ]
})
