#!/bin/bash
# GitLab Deployment Script for FlipFlow
git init
git remote add origin https://gitlab.com/your-username/flipflow.git
git add .
git commit -m "Initial Commit - FlipFlow Final Build"
git push -u origin master
