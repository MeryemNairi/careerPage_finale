import { sp } from "@pnp/sp/presets/all";

// Define the interface for the data structure
export interface ProcessItem {
  Number: string;
  Process: string;
  
}

export const fetchProcessData = async (): Promise<ProcessItem[]> => {
  try {
    const response = await sp.web.lists.getByTitle("HiringProcess").items.select("Number", "Process").get();
    console.log("Latest News data response:", response);
    if (response && response.length > 0) {
      // Fetch image URLs and map the response to construct the correct image URL
      
      const Process: ProcessItem[] = response.map((item, index) => ({
        Number: item.Number,
        Process: item.Process
      }));
      return Process;
    } else {
      console.error("Empty response received for Latest News data.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching Latest News data:", error);
    return [];
  }
};


