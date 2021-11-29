import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({acai}) {
    return (
        <Card>
            <Link to={`/directory/${acai.id}`}>
                <CardImg width="100%" src={acai.image} alt={acai.name} />
                <CardImgOverlay>
                    <CardTitle>{acai.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
