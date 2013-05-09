'use strict';

votrApp.controller('VoteCtrl', function($scope) {
	$scope.presidentialCandidates = [
		'candidate': [
			{
				'Full Name': 'Barack Obama',
				'Party': 'Democrat',
				'Alma Mater': [
					{
						'school': 'Occidental College',
						'school': 'Columbia University (B.A.)',
						'school': 'Harvard Law School (J.D.)'
					}
				],
				'Career': [
					{
						'job': 'Community Organizer',
						'job': 'Lawyer',
						'job': 'Constitutional law professor',
						'job': 'Author',
						'job': 'United States Senator from Illinois',
						'job': 'Member of the Illinois Senate from the 13th District',
						'job': '44th President of the United States'
					}
				],
				'Home State': 'Illinois',
				'Born': [
					{
						'Date': 'August 4, 1961 (age 51)',
						'Location': 'Honolulu, Hawaii'
					}
				],
				'Religion': 'Protestant',
				'Running Mate': 'Joe Biden'
			}
		];

		'candidate': [
			{
				'Full Name': 'Mitt Romney',
				'Party': 'Repulican',
				'Alma Mater': [
					{
						'school': 'Brifham Young University (B.A.)',
						'school': 'Harvard University (M.B.A., J.D.)'
					}
				],
				'Career': [
					{
						'job': 'Management consultant, Venture capitalist',
						'job': 'Private equity',
						'job': 'CEO, 2002 Winter Olympics Organizing Committee',
						'job': 'CEO, Bain & Company',
						'job': 'Capital',
						'job': 'Cofounder and CEO, Bain',
						'job': '70th Governor of Massachusetts'
					}
				],
				'Home State': 'California',
				'Born': [
					{
						'Date': 'March 12, 1947 (age 65)',
						'Location': 'Detroit, Michigan'
					}
				],
				'Religion': 'The Church of Jesus Christ of Latter-day Saints (Mormon)',
				'Running Mate': 'Paul Ryan'
			}
		];
	];

	$scope.votingTopics = [
		'National': [
			{
				'topic': 'President & Vice President'
			}
		],
		'State': [
			{
				'California': [
					{
						'topic': 'United States Senator',
						'topic': 'United States Representative',
						'topic': 'State Assembly',
						'topic': 'School Govering Board Member',
						'topic': 'State Proposition 30',
						'topic': 'State Proposition 31',
						'topic': 'State Proposition 32',
						'topic': 'State Proposition 33',
						'topic': 'State Proposition 34',
						'topic': 'State Proposition 35',
						'topic': 'State Proposition 36',
						'topic': 'State Proposition 37',
						'topic': 'State Proposition 38',
						'topic': 'State Proposition 39',
						'topic': 'State Proposition 40',
						'City': [
							{
								'Sacramento': [
									{
										'topic': 'City Mayor',
										'topic': 'City Council Memeber',
										'topic': 'City Measure G'
									}
								];
							}
						],
						'County': [
							{
								'Yolo': [
									{
										'topic': 'County Measure H'
									}
								];
							}
						];
					}
				];
			}
		];
	];
});
