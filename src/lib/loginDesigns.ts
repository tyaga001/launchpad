export interface LoginDesign {
  id: string
  name: string
  description: string
  component: React.ComponentType
}

import Design1 from '@/components/loginDesigns/Design1'

export const loginDesigns: LoginDesign[] = [
  {
    id: 'design1',
    name: 'Blue Split Screen',
    description: 'A modern split-screen design with a blue accent',
    component: Design1,
  },
]
