import { z } from 'zod';

export const createTasksSchema = z.object({
    body: z.object({
        title: z.string().min(3, 'title must have at least 3 characters').max(100, 'title must be lower than 100 characters'),
        description: z.string().optional(),
        completed: z.boolean().default(false),
        priority: z.enum(['low', 'medium', 'high']).default('medium'),
    })
})

export const updateTasksSchema = z.object({
    body: z.object({
        title: z.string().min(3, 'title must have at least 3 characters').max(100, 'title must be lower than 100 characters'),
        description: z.string().optional(),
        completed: z.boolean().default(false),
        priority: z.enum(['low', 'medium', 'high']).default('medium'),
    }),
    params: z.object({
        id: z.int()
    })
})
