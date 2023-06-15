import { ObserversModule } from "@angular/cdk/observers";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, observable } from "rxjs";

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
    constructor(){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err) => {
                console.log(err);
                return ObservableThrowError(err)
            })
        );
    }
}

function ObservableThrowError(err: any): any {
    throw new Error("Function not implemented.");
}
