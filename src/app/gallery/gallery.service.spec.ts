import { TestBed, inject } from '@angular/core/testing';
import { GalleryService } from './gallery.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs'; // Add import


describe('GalleryService', () => {
  let galleryService: GalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryService],
      imports: [HttpClientModule]
    });

    galleryService = TestBed.get(GalleryService);
  });

	it('should be created', () => {
		expect(galleryService).toBeTruthy();
	});

	   
	it('should return a collection of Flikr Images', () => {
		inject([GalleryService], (galleryService) => {

		    galleryService.getFlikrData().subscribe((photos) => {
		      expect(photos["data"]["photos"]["photo"].length).toBeGreaterThan(0);
		    });
	    });
	 });


	 it('should return a collection of Flikr Images, with keyword', () => {
		inject([GalleryService], (galleryService) => {

		    galleryService.getFlikrData('art', 1).subscribe((photos) => {
		      expect(photos["data"]["photos"]["photo"].length).toBeGreaterThan(0);
		    });
	    });
	 });


	 it('should return a collection of Flikr Images, with keyword and next page', () => {
		inject([GalleryService], (galleryService) => {

		    galleryService.getFlikrData('art', 1).subscribe((photos) => {
		      expect(photos["data"]["photos"]["photo"].length).toBeGreaterThan(0);
		    });
	    });
	 });    
});