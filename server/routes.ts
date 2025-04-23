import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real implementation, you might:
      // 1. Store in database
      // 2. Send email notification
      // 3. Set up auto-responder
      
      // For now we'll just log it
      console.log('Contact form submission:', validatedData);
      
      // Save to storage
      await storage.saveContactSubmission(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: 'Message received! We will get back to you soon.' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Validation error', 
          errors: error.errors 
        });
      } else {
        console.error('Error processing contact form:', error);
        res.status(500).json({ 
          success: false, 
          message: 'Server error processing your request' 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
