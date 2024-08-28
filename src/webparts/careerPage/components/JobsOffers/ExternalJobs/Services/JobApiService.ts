
import "@pnp/sp/webs"; 
import "@pnp/sp/lists/web";
import "@pnp/sp/items";
import "@pnp/sp/attachments";


export interface Job {
  PositionTitle: string;
  JobUrl: string;
  JobDescription: string;
  JobId: string;
  JobType: string;
  
}

export async function fetchJobsFromXml(): Promise<Job[]> {
  try {
    const xmlData = await fetchXmlData("https://jobboards-ca.phenommarket.com/feeds/cnexemea-fr-emea-feed-linkedin");
    const jobNodes = xmlData.getElementsByTagName('job');
  
    const fetchedJobs: Job[] = [];
  
    for (let i = 0; i < jobNodes.length; i++) {
      const node = jobNodes[i];
      const job: Job = {
        PositionTitle: node.getElementsByTagName('title')[0]?.textContent || '',
        JobUrl: node.getElementsByTagName('url')[0]?.textContent || '',
        JobDescription: node.getElementsByTagName('description')[0]?.textContent || '',
        JobId: node.getElementsByTagName('referencenumber')[0]?.textContent || '',
        JobType: node.getElementsByTagName('jobtype')[0]?.textContent || '',
        
      };
      fetchedJobs.push(job);
    }
  
    return fetchedJobs;
  } catch (error) {
    console.error('Error fetching job data:', error);
    throw new Error('Failed to fetch job data. Please try again later.');
  }
}

async function fetchXmlData(url: string): Promise<Document> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch XML data (${response.status}): ${response.statusText}`);
  }
  const xmlText = await response.text();
  const parser = new DOMParser();
  return parser.parseFromString(xmlText, 'text/xml');
}
