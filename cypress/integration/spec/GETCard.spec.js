import * as GETCard from '../services/Card/GETCard.request';
import {ListName} from '../../../utils/enums.js'

describe('Get Card', () => {
    it('trazer json com dados do card', () => {
        GETCard.getCard().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.list.name).to.eq(ListName);
            cy.log(response.body.data.list.name);
        });
    });
});