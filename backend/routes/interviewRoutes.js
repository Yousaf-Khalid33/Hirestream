import express from 'express';
import { scheduleInterview, getInterviewerSchedule, getTopProfiles } from '../controllers/interviewController.js';
import { verifyToken, authorizeRole } from '../middleware/authMiddleware.js';

const router = express.Router();

// Only recruiters can schedule
router.post('/schedule', verifyToken, authorizeRole(['recruiter']), scheduleInterview);

// Only interviewers can see their own schedule
router.get('/my-interviews', verifyToken, authorizeRole(['interviewer']), getInterviewerSchedule);

// Interviewer top candidate profiles
router.get('/top-profiles', verifyToken, authorizeRole(['interviewer']), getTopProfiles);

export default router;