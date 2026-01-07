import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve files from attached_assets
  app.get('/api/resume', async (_req, res) => {
    const filePath = path.resolve(process.cwd(), 'attached_assets', 'RIZWAN_RIYAZ_RESUME_2026_1767816929258.pdf');
    if (fs.existsSync(filePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=RIZWAN_RIYAZ_RESUME_2026.pdf');
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.status(404).send('Resume not found');
    }
  });

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
  
  // Get all contact submissions (admin endpoint)
  app.get('/api/contact/submissions', async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json({ submissions });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Error fetching contact submissions' 
      });
    }
  });
  
  // Get specific contact submission
  app.get('/api/contact/submissions/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid submission ID' 
        });
      }
      
      const submission = await storage.getContactSubmission(id);
      
      if (!submission) {
        return res.status(404).json({ 
          success: false, 
          message: 'Submission not found' 
        });
      }
      
      res.status(200).json({ submission });
    } catch (error) {
      console.error('Error fetching contact submission:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Error fetching contact submission' 
      });
    }
  });
  
  // Mark contact submission as read
  app.patch('/api/contact/submissions/:id/read', async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid submission ID' 
        });
      }
      
      const updatedSubmission = await storage.markContactSubmissionAsRead(id);
      
      if (!updatedSubmission) {
        return res.status(404).json({ 
          success: false, 
          message: 'Submission not found' 
        });
      }
      
      res.status(200).json({ 
        success: true, 
        submission: updatedSubmission 
      });
    } catch (error) {
      console.error('Error marking submission as read:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Error updating contact submission' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
