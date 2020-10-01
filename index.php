<?php

/**
 * hana+nils · Büro für Gestaltung
 * https://hananils.de · buero@hananils.de
 */

Kirby::plugin('hananils/structure-textarea-preview', [
    'api' => [
        'routes' => function ($kirby) {
            return [
                [
                    'pattern' => 'formatted',
                    'method' => 'post',
                    'action' => function () use ($kirby) {
                        $data = $kirby->request()->data();
                        $formatted = '';

                        if (isset($data['content'])) {
                            $formatted = kirbytext(
                                smartypants($data['content'])
                            );
                        }

                        return [
                            'formatted' => $formatted
                        ];
                    }
                ]
            ];
        }
    ]
]);
