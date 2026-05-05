import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'security portfolio',

  projectId: '8cogjjew',
  dataset: 'portfolio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
