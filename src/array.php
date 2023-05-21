<?php
$location = [
    [
        'ID' => 1,
        'Name' => 'Location 1',
        'Street Address' => '123 Main Street',
        'Phone' => '123-456-7890',
        'View Unit Button Link' => 'https://example.com/unit/1',
    ],
    [
        'ID' => 2,
        'Name' => 'Location 2',
        'Street Address' => '456 Second Street',
        'Phone' => '987-654-3210',
        'View Unit Button Link' => 'https://example.com/unit/2',
    ],
];

header('Content-Type: application/json');
echo json_encode($location);
