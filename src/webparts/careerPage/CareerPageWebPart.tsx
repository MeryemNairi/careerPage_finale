import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, Log } from '@microsoft/sp-core-library';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp/presets/all";

import * as strings from 'CareerPageWebPartStrings';
import CareerPage from './components/CareerPage';
import './CareerPageWebPart.module.scss';

const LOG_SOURCE: string = "CareerPageWebPart";

// Define predefined element IDs
const PREDEFINED_ELEMENT_ID1: string = "SuiteNavWrapper";
const PREDEFINED_ELEMENT_ID2: string = "sp-appBar";
const PREDEFINED_ELEMENT_ID3: string = "spSiteHeader";
const PREDEFINED_ELEMENT_ID4: string = "spCommandBar";

// Define predefined class names
const PREDEFINED_CLASS_NAME1: string = "";
const PREDEFINED_CLASS_NAME2: string = "";
const PREDEFINED_CLASS_NAME3: string = "";

declare global {
  interface Window {
    gtag: any;
    dataLayer: any[];
  }
}

window.gtag = window.gtag || function() {
  window.dataLayer.push(arguments);
};


export default class CareerPageWebPart extends BaseClientSideWebPart<{}> {

  // Define a state to track whether the initial load has occurred
  state = {
    initialLoad: true,
  };

  protected onInit(): Promise<void> {
    return super.onInit().then(_ => {
      // Other init code
      sp.setup({
        spfxContext: this.context as any
      });

      // Hide the predefined elements if they exist
      this.hideElementById(PREDEFINED_ELEMENT_ID1);
      this.hideElementById(PREDEFINED_ELEMENT_ID2);
      this.hideElementById(PREDEFINED_ELEMENT_ID3);
      this.hideElementById(PREDEFINED_ELEMENT_ID4);

      // Hide the predefined elements by class name if they exist
      this.hideElementsByClass(PREDEFINED_CLASS_NAME1);
      this.hideElementsByClass(PREDEFINED_CLASS_NAME2);
      this.hideElementsByClass(PREDEFINED_CLASS_NAME3);

      // Additional initialization logic if needed
      // adding google Analytics script for tracking
      this.setupGoogleAnalytics();
    });
  }

  private setupGoogleAnalytics(): void {
    const scriptId = 'google-analytics-script';
  
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-L83RPMZJ2M`;
      script.async = true;
      document.head.appendChild(script);
  
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-L83RPMZJ2M', {
          'custom_map': {'dimension1': 'user_name'} // Map your custom dimension
        });
      `;
      document.head.appendChild(script2);
    }
  }

  private hideElementById(elementId: string): void {
    if (elementId) {
      const spElement: HTMLElement | null = document.getElementById(elementId);
      if (spElement) {
        Log.info(LOG_SOURCE, `Found Element with ID ${elementId}`);
        spElement.style.setProperty("display", "none", "important");
      } else {
        Log.info(LOG_SOURCE, `Element with ID ${elementId} not found`);
      }
    }
  }

  private hideElementsByClass(className: string): void {
    if (className) {
      const elements: NodeListOf<HTMLElement> = document.querySelectorAll(`.${className}`);
      if (elements.length > 0) {
        elements.forEach(element => {
          Log.info(LOG_SOURCE, `Found Element with Class ${className}`);
          element.style.setProperty("display", "Block", "important");
          element.style.minHeight="1080px";

        });
      } else {
        Log.info(LOG_SOURCE, `Elements with Class ${className} not found`);
      }
    }
  }

  public render(): void {
    const element: React.ReactElement<{}> = (
      <Router>
        <React.Fragment>
          <CareerPage context={this.context} />
        </React.Fragment>
      </Router>
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
