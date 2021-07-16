import { CommonContexts } from "@epam/uui";
import { getDemoApi } from "@epam/uui-docs";

export interface GetCodeParams {
    path: string;
}

export interface GetCodeResponse {
    filePath: string;
    gitUrl: string;
    raw: string;
    highlighted: string;
}

export function getApi(processRequest: (request: string, requestMethod: string, data?: any, options?: RequestInit) => any) {
    const ORIGIN = process.env.PUBLIC_URL || '';
    return {
        demo: getDemoApi(processRequest),
        success: {
            validateForm: <T>(formState: T) => processRequest(ORIGIN.concat('api/success/validate-form'), 'POST', formState),
        },
        errors: {
            status: (status: number) => processRequest(ORIGIN.concat(`api/error/status/${status}`), 'POST'),
            setServerStatus: (status: number) => processRequest(ORIGIN.concat(`api//error/set-server-status/${status}`), 'POST'),
            mock: () => processRequest(ORIGIN.concat(`api//error/mock`), 'GET'),
            authLost: () => processRequest(ORIGIN.concat(`api//error/auth-lost`), 'POST'),
        },
        getChangelog(): Promise<any> {
            return processRequest(ORIGIN.concat('/api/get-changelog'), 'GET');
        },
        getCode(rq: GetCodeParams): Promise<GetCodeResponse> {
            return processRequest(ORIGIN.concat(`/api/get-code`), 'POST', rq);
        },
        getProps(): Promise<any> {
            return processRequest(ORIGIN.concat(`/api/get-props/`), 'GET');
        },
    };
};

export const svc: CommonContexts<any, any> = {} as any;