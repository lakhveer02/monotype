import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'board-committee',
    loadComponent: () =>
      import('./components/board-committee/board-committee.component').then(
        (m) => m.BoardCommitteeComponent
      ),
  },
  {
    path: 'directors',
    loadComponent: () =>
      import('./components/directors/directors.component').then(
        (m) => m.DirectorsComponent
      ),
  },
  {
    path: 'financial',
    loadComponent: () =>
      import('./components/financial/financial.component').then(
        (m) => m.FINANCIALComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'board-meeting-notice',
    loadComponent: () =>
      import(
        './components/board-meeting-notice/board-meeting-notice.component'
      ).then((m) => m.BoardMeetingNoticeComponent),
  },
  {
    path: 'board-meeting-outcome',
    loadComponent: () =>
      import(
        './components/board-meeting-outcome/board-meeting-outcome.component'
      ).then((m) => m.BoardMeetingOutcomeComponent),
  },
  {
    path: 'policies',
    loadComponent: () =>
      import('./components/policies/policies.component').then(
        (m) => m.PoliciesComponent
      ),
  },

  {
    path: 'comming-soon',
    loadComponent: () =>
      import('./components/coming-soon/coming-soon.component').then(
        (m) => m.ComingSoonComponent
      ),
  },
  {
    path: 'career-info',
    loadComponent: () =>
      import('./components/career/career.component').then(
        (m) => m.CareerComponent
      ),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./components/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'annual-secretarial-compliance',
    loadComponent: () =>
      import(
        './components/annual-secretarial-compliance/annual-secretarial-compliance.component'
      ).then((m) => m.AnnualSecretarialComplianceComponent),
  },
  {
    path: 'scrutinizer-report',
    loadComponent: () =>
      import(
        './components/scrutinizer-report/scrutinizer-report.component'
      ).then((m) => m.ScrutinizerReportComponent),
  },
  {
    path: 'informationofbm',
    loadComponent: () =>
      import('./components/informationof-bm/informationof-bm.component').then(
        (m) => m.InformationofBMComponent
      ),
  },
  {
    path: 'newspaperspublication',
    loadComponent: () =>
      import(
        './components/newspapers-publication/newspapers-publication.component'
      ).then((m) => m.NewspapersPublicationComponent),
  },
  {
    path: 'chatbot',
    loadComponent: () =>
      import('./components/chatbot/chatbot.component').then(
        (m) => m.ChatbotComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
  },
  {
    path: 'header',
    loadComponent: () =>
      import('./components/header/header.component').then(
        (m) => m.HeaderComponent
      ),
  },
  {
    path: 'sharereconiliationreport',
    loadComponent: () =>
      import(
        './components/share-reconciliation-report/share-reconciliation-report.component'
      ).then((m) => m.ShareReconciliationReportComponent),
  },
  {
    path: 'relatedparttransaction',
    loadComponent: () =>
      import(
        './components/related-party-transaction/related-party-transaction.component'
      ).then((m) => m.RelatedPartyTransactionComponent),
  },
  {
    path:'shareholdingpattern',
    loadComponent: () =>
      import(
        './components/shareholding-pattern/shareholding-pattern.component'
      ).then((m) => m.ShareholdingPatternComponent)
  },
  {
    path:'annual-report',
    loadComponent:()=>import('./components/annual-report/annual-report.component').then((m)=>m.AnnualReportComponent)
  },
  {
    path:'investorcomplaints',
    loadComponent:()=>import('./components/investor-complaints/investor-complaints.component').then((m)=>m.InvestorComplaintsComponent)
  }
];
