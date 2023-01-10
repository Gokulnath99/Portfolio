import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skill',
      title: 'Skill',
      type: 'string',
    }),
    defineField({
      name: 'skillImage',
      title: 'SkillImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
  ]
})
