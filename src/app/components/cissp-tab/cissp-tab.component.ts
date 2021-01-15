import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cissp-tab',
  templateUrl: './cissp-tab.component.html',
  styleUrls: ['./cissp-tab.component.scss']
})
export class CisspTabComponent implements OnInit {
  domainData = [
    {
      idx: 1,
      title: 'Security and Risk Management',
      courses: [
        {
          idx: 1,
          title: 'MindMap',
          url: 'geGALIfOxtI'
        }
      ]
    },
    {
      idx: 2,
      title: 'Asset Security',
      courses: [
        {
          idx: 1,
          title: 'Asset Classification',
          url: 'aN9zkmzYTmQ'
        },
        {
          idx: 2,
          title: 'Privacy',
          url: 'lrI4QIa8S2I'
        }
      ]
    },
    {
      idx: 3,
      title: 'Security Architecture and Engineering',
      courses: [
        {
          idx: 1,
          title: 'Models and Frmaeworks',
          url: 'qZB6_lp9M30'
        },
        {
          idx: 2,
          title: 'Evaluation Criteria',
          url: 'WqHmDL7YAvw'
        },
        {
          idx: 3,
          title: 'Trusted Computing',
          url: 'fwU7n_3h058'
        },
        {
          idx: 4,
          title: 'Vulnerabilities in Systems',
          url: 'fPUypU7ysMw'
        },
        {
          idx: 5,
          title: 'Cloud',
          url: '-rWQ7YuxiLY'
        },
        {
          idx: 6,
          title: 'Cryptography',
          url: 'LLRaa0kOMDM'
        },
        {
          idx: 7,
          title: 'Digital Certificates, Digital Signatures & PKI',
          url: '8XKdFSG3ua4'
        },
        {
          idx: 8,
          title: 'Cryptanalysis',
          url: 'pnITDgs63M4'
        },
        {
          idx: 9,
          title: 'Physical Security',
          url: '7ESQwNJ9HXU'
        }
      ]
    },
    {
      idx: 4,
      title: 'Communications and Network Security',
      courses: [
        {
          idx: 1,
          title: 'OSI Model',
          url: '6X4A6B94vmw'
        },
        {
          idx: 2,
          title: 'Networking',
          url: 'EW0iBXHVqB0'
        }
      ]
    },
    {
      idx: 5,
      title: 'Identity and Access Management',
      courses: [
        {
          idx: 1,
          title: 'Access Control',
          url: 'BUcoABZzeQ4'
        },
        {
          idx: 2,
          title: 'Single Sign-on and Federated Identity Management',
          url: '_U4QMIxVk8M'
        }
      ]
    },
    {
      idx: 6,
      title: 'Security Assessment and Testing',
      courses: [
        {
          idx: 1,
          title: 'Security Assessment and Testing Overview',
          url: 'eDVZvw5NziA'
        },
        {
          idx: 2,
          title: 'Vulnerability Assessment and Penetration Testing',
          url: 'vZ0S8GdWiIk'
        },
        {
          idx: 3,
          title: 'Logging & Monitoring',
          url: 'cwcARccyWyY'
        }
      ]
    },
    {
      idx: 7,
      title: 'Security Operations',
      courses: [
        {
          idx: 1,
          title: 'Investigations',
          url: 'Urev5cZgny8'
        },
        {
          idx: 2,
          title: 'Incident Response',
          url: 'PwxFwndQ7Jk'
        },
        {
          idx: 3,
          title: 'Malware',
          url: 'SVbrRozyIpo'
        },
        {
          idx: 4,
          title: 'Patching & Change',
          url: 'xX4U6Lz82Bk'
        },
        {
          idx: 5,
          title: 'Recovery',
          url: 'DrrfrJBnx28'
        },
        {
          idx: 6,
          title: 'Business Continuity Management (BCM)',
          url: 'oAjNL3I_3-E'
        }
      ]
    },
    {
      idx: 8,
      title: 'Software Development Security',
      courses: [
        {
          idx: 1,
          title: 'Secure Software Development',
          url: 'fS5WWjuyFmQ'
        },
        {
          idx: 2,
          title: 'Databases',
          url: '-70DBd6cNDw'
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
